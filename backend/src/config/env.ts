import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

interface Config {
  // Server Configuration
  port: number;
  nodeEnv: 'development' | 'production' | 'test';
  
  // Frontend Configuration
  frontendUrl: string;
  
  // Email Configuration
  emailUser?: string;
  emailPass?: string;
  emailFrom?: string;
  emailTo?: string;
  smtpHost?: string;
  smtpPort: number;
  smtpSecure: boolean;
  
  // Security Configuration
  rateLimitWindow: number;
  rateLimitMax: number;
  
  // API Configuration
  requestBodyLimit: string;
}

const config: Config = {
  // Server Configuration
  port: parseInt(process.env.PORT || '5000', 10),
  nodeEnv: (process.env.NODE_ENV as Config['nodeEnv']) || 'development',
  
  // Frontend Configuration
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  
  // Email Configuration
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  emailFrom: process.env.EMAIL_FROM,
  emailTo: process.env.EMAIL_TO,
  smtpHost: process.env.SMTP_HOST,
  smtpPort: parseInt(process.env.SMTP_PORT || '587', 10),
  smtpSecure: process.env.SMTP_SECURE === 'true',
  
  // Security Configuration
  rateLimitWindow: parseInt(process.env.RATE_LIMIT_WINDOW || '900000', 10), // 15 minutes
  rateLimitMax: parseInt(process.env.RATE_LIMIT_MAX || '100', 10),
  
  // API Configuration
  requestBodyLimit: process.env.REQUEST_BODY_LIMIT || '10mb',
};

// Validation functions
export const validateConfig = (): void => {
  const requiredFields: (keyof Config)[] = ['port', 'nodeEnv', 'frontendUrl'];
  
  for (const field of requiredFields) {
    if (!config[field]) {
      throw new Error(`Missing required environment variable: ${field.toUpperCase()}`);
    }
  }
  
  // Validate port range
  if (config.port < 1 || config.port > 65535) {
    throw new Error('PORT must be between 1 and 65535');
  }
  
  // Validate node environment
  const validEnvironments = ['development', 'production', 'test'];
  if (!validEnvironments.includes(config.nodeEnv)) {
    throw new Error('NODE_ENV must be development, production, or test');
  }
  
  // Validate email configuration in production
  if (config.nodeEnv === 'production') {
    const emailFields: (keyof Config)[] = ['emailUser', 'emailPass', 'emailTo', 'smtpHost'];
    for (const field of emailFields) {
      if (!config[field]) {
        console.warn(`Warning: ${field.toUpperCase()} is not set. Email functionality may not work properly.`);
      }
    }
  }
};

export const getConfig = (): Config => config;

export const isDevelopment = (): boolean => config.nodeEnv === 'development';
export const isProduction = (): boolean => config.nodeEnv === 'production';
export const isTest = (): boolean => config.nodeEnv === 'test';

// Log configuration (without sensitive data)
export const logConfig = (): void => {
  console.log('📋 Configuration loaded:');
  console.log(`   🌐 Environment: ${config.nodeEnv}`);
  console.log(`   🚀 Port: ${config.port}`);
  console.log(`   🎨 Frontend URL: ${config.frontendUrl}`);
  console.log(`   📧 Email configured: ${config.emailUser ? '✅' : '❌'}`);
  console.log(`   🛡️  Rate limiting: ${config.rateLimitMax} requests per ${config.rateLimitWindow / 1000 / 60} minutes`);
};

export default config;