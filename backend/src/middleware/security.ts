import rateLimit from 'express-rate-limit';
import { Request, Response, NextFunction } from 'express';
import config from '../config/env';

// General API rate limiter
export const generalRateLimit = rateLimit({
  windowMs: config.rateLimitWindow, // 15 minutes
  max: config.rateLimitMax, // Limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests',
    message: 'Too many requests from this IP address. Please try again later.',
    retryAfter: Math.ceil(config.rateLimitWindow / 1000 / 60) + ' minutes'
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  skip: (req: Request) => {
    // Skip rate limiting for health checks
    return req.path === '/api/health';
  }
});

// Strict rate limiter for contact form (more restrictive)
export const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 contact form submissions per 15 minutes
  message: {
    error: 'Too many contact form submissions',
    message: 'You have exceeded the maximum number of contact form submissions. Please try again in 15 minutes.',
    retryAfter: '15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Request size limiter middleware
export const requestSizeLimit = (req: Request, res: Response, next: NextFunction) => {
  const contentLength = req.get('content-length');
  const maxSize = parseInt(config.requestBodyLimit.replace('mb', '')) * 1024 * 1024; // Convert MB to bytes
  
  if (contentLength && parseInt(contentLength) > maxSize) {
    return res.status(413).json({
      error: 'Request entity too large',
      message: `Request body size exceeds the maximum limit of ${config.requestBodyLimit}`
    });
  }
  
  next();
};

// IP-based security checks (basic implementation)
export const ipSecurityCheck = (req: Request, res: Response, next: NextFunction) => {
  const clientIp = req.ip || req.connection.remoteAddress || 'unknown';
  
  // Log suspicious activity (you can extend this with more sophisticated checks)
  if (req.method === 'POST' && req.path.includes('/api/contact')) {
    console.log(`📧 Contact form submission from IP: ${clientIp}`);
  }
  
  next();
};

// Headers security middleware (additional to helmet)
export const additionalSecurityHeaders = (req: Request, res: Response, next: NextFunction) => {
  // Add custom security headers
  res.setHeader('X-API-Version', '1.0.0');
  res.setHeader('X-Response-Time', Date.now().toString());
  
  // Add CORS headers for specific endpoints if needed
  if (req.path.startsWith('/api/')) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }
  
  next();
};

// Request logging middleware (enhanced)
export const enhancedLogger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const clientIp = req.ip || req.connection.remoteAddress || 'unknown';
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const statusColor = res.statusCode >= 400 ? '🔴' : res.statusCode >= 300 ? '🟡' : '🟢';
    
    console.log(
      `${statusColor} ${req.method} ${req.path} - ${res.statusCode} - ${duration}ms - ${clientIp}`
    );
  });
  
  next();
};

// Error handling middleware for security-related errors
export const securityErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Log security-related errors
  if (error.status === 429 || error.status === 413 || error.status === 403) {
    console.warn(`🛡️  Security issue: ${error.message} - IP: ${req.ip}`);
  }
  
  next(error);
};