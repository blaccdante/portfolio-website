import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import contactRoutes from './routes/contact';

// Import configuration and security middleware
import config, { validateConfig, logConfig } from './config/env';
import {
  generalRateLimit,
  contactRateLimit,
  requestSizeLimit,
  ipSecurityCheck,
  additionalSecurityHeaders,
  enhancedLogger,
  securityErrorHandler
} from './middleware/security';

// Validate configuration on startup
validateConfig();

const app = express();
const PORT = config.port;

// Security Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", config.frontendUrl],
    },
  },
  crossOriginEmbedderPolicy: false, // Allow embedding for development
}));

// CORS Configuration
app.use(cors({
  origin: config.frontendUrl,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Rate Limiting
app.use(generalRateLimit);

// Security Headers and Checks
app.use(additionalSecurityHeaders);
app.use(ipSecurityCheck);
app.use(requestSizeLimit);

// Logging
app.use(morgan('combined'));
app.use(enhancedLogger);

// Body Parsing
app.use(express.json({ limit: config.requestBodyLimit }));
app.use(express.urlencoded({ extended: true, limit: config.requestBodyLimit }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Portfolio API is running',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/contact', contactRateLimit, contactRoutes);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `The route ${req.originalUrl} does not exist on this server`
  });
});

// Security Error Handler
app.use(securityErrorHandler);

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('💥 Error:', err);
  
  // Enhanced error response
  const errorResponse = {
    error: err.status === 429 ? 'Rate limit exceeded' : 'Internal Server Error',
    message: config.nodeEnv === 'development' ? err.message : 'Something went wrong',
    status: err.status || 500,
    timestamp: new Date().toISOString()
  };
  
  res.status(err.status || 500).json(errorResponse);
});

// Graceful shutdown handling
const gracefulShutdown = () => {
  console.log('\n🔄 Received shutdown signal. Starting graceful shutdown...');
  process.exit(0);
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Start server
app.listen(PORT, () => {
  console.log('\n🚀 Portfolio API Server Started Successfully!');
  console.log('='.repeat(50));
  logConfig();
  console.log('='.repeat(50));
  console.log(`\n🌍 Server URL: http://localhost:${PORT}`);
  console.log(`📊 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`📧 Contact API: http://localhost:${PORT}/api/contact`);
  console.log('\n✅ Ready to accept connections!\n');
});
