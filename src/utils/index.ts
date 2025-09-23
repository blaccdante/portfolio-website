import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format date to readable string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
}

/**
 * Calculate duration between two dates
 */
export function calculateDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const diffInMonths = (end.getFullYear() - start.getFullYear()) * 12 + 
                      (end.getMonth() - start.getMonth());
  
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths === 1 ? '' : 's'}`;
  }
  
  const years = Math.floor(diffInMonths / 12);
  const remainingMonths = diffInMonths % 12;
  
  if (remainingMonths === 0) {
    return `${years} year${years === 1 ? '' : 's'}`;
  }
  
  return `${years} year${years === 1 ? '' : 's'} ${remainingMonths} month${remainingMonths === 1 ? '' : 's'}`;
}

/**
 * Get skill color based on proficiency level
 */
export function getSkillColor(proficiency: number): string {
  const colors = {
    1: "bg-red-500",
    2: "bg-orange-500", 
    3: "bg-yellow-500",
    4: "bg-green-500",
    5: "bg-blue-500"
  };
  return colors[proficiency as keyof typeof colors] || colors[3];
}

/**
 * Generate a random delay for staggered animations
 */
export function getStaggerDelay(index: number, baseDelay: number = 0.1): number {
  return baseDelay * index;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}