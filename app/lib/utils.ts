// Utility functions for the SaaS website

// Format currency
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Format date
export const formatDate = (date: Date | string, options: Intl.DateTimeFormatOptions = {}): string => {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options,
  }
  
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('en-US', defaultOptions).format(dateObj)
}

// Format number with commas
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num)
}

// Generate random ID
export const generateId = (length: number = 8): string => {
  return Math.random().toString(36).substring(2, 2 + length)
}

// Truncate text
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

// Debounce function
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle function
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Phone number validation
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  return phoneRegex.test(phone)
}

// Password strength checker
export const checkPasswordStrength = (password: string): {
  score: number
  strength: 'Weak' | 'Fair' | 'Good' | 'Strong'
  suggestions: string[]
} => {
  const suggestions: string[] = []
  let score = 0

  // Length check
  if (password.length >= 8) score += 1
  else suggestions.push('Use at least 8 characters')

  // Lowercase check
  if (/[a-z]/.test(password)) score += 1
  else suggestions.push('Add lowercase letters')

  // Uppercase check
  if (/[A-Z]/.test(password)) score += 1
  else suggestions.push('Add uppercase letters')

  // Number check
  if (/\d/.test(password)) score += 1
  else suggestions.push('Add numbers')

  // Special character check
  if (/[^A-Za-z0-9]/.test(password)) score += 1
  else suggestions.push('Add special characters')

  // Determine strength
  let strength: 'Weak' | 'Fair' | 'Good' | 'Strong'
  if (score >= 4) strength = 'Strong'
  else if (score === 3) strength = 'Good'
  else if (score === 2) strength = 'Fair'
  else strength = 'Weak'

  return { score, strength, suggestions }
}

// Generate random color
export const generateRandomColor = (): string => {
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-purple-500',
    'bg-pink-500', 'bg-orange-500', 'bg-indigo-500',
    'bg-teal-500', 'bg-cyan-500', 'bg-rose-500'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

// Get initials from name
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2)
}

// Calculate percentage
export const calculatePercentage = (value: number, total: number): number => {
  if (total === 0) return 0
  return Math.round((value / total) * 100)
}

// Sleep/delay function
export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Copy to clipboard
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy text: ', err)
    return false
  }
}

// Get current year for copyright
export const getCurrentYear = (): number => {
  return new Date().getFullYear()
}

// Class name utility (like clsx)
export const cn = (...classes: (string | boolean | undefined | null)[]): string => {
  return classes.filter(Boolean).join(' ')
}

// Local storage utilities
export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  },
  
  set: <T>(key: string, value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  },
  
  remove: (key: string): void => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing from localStorage:', error)
    }
  },
  
  clear: (): void => {
    try {
      localStorage.clear()
    } catch (error) {
      console.error('Error clearing localStorage:', error)
    }
  }
}

// Theme utilities
export const theme = {
  isDarkMode: (): boolean => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  },
  
  setTheme: (theme: 'light' | 'dark'): void => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  },
  
  toggleTheme: (): void => {
    const current = localStorage.getItem('theme') || 
      (theme.isDarkMode() ? 'dark' : 'light')
    theme.setTheme(current === 'dark' ? 'light' : 'dark')
  }
}