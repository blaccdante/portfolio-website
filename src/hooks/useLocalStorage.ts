import { useState, useEffect } from 'react';

/**
 * Custom hook for managing localStorage with React state
 * Provides automatic synchronization between localStorage and component state
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void, () => void] {
  // Get from local storage then parse stored json or return initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window === 'undefined') return initialValue;
      
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      setStoredValue(valueToStore);
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Function to remove the item from localStorage and reset to initial value
  const removeValue = () => {
    try {
      setStoredValue(initialValue);
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  };

  // Listen for changes to localStorage from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          console.error(`Error parsing localStorage value for key "${key}":`, error);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
      return () => window.removeEventListener('storage', handleStorageChange);
    }
  }, [key]);

  return [storedValue, setValue, removeValue];
}

/**
 * Hook for managing user preferences with localStorage
 */
export function useUserPreferences() {
  const [preferences, setPreferences, clearPreferences] = useLocalStorage('userPreferences', {
    theme: 'system' as 'light' | 'dark' | 'system',
    language: 'en',
    reducedMotion: false,
    notifications: true,
    autoSave: true
  });

  const updatePreference = <K extends keyof typeof preferences>(
    key: K,
    value: typeof preferences[K]
  ) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  return {
    preferences,
    updatePreference,
    clearPreferences,
    setPreferences
  };
}

/**
 * Hook for managing recently viewed items
 */
export function useRecentlyViewed<T extends { id: string; title: string }>(
  maxItems: number = 10
) {
  const [recentItems, setRecentItems] = useLocalStorage<T[]>('recentlyViewed', []);

  const addRecentItem = (item: T) => {
    setRecentItems(prev => {
      const filtered = prev.filter(existing => existing.id !== item.id);
      return [item, ...filtered].slice(0, maxItems);
    });
  };

  const removeRecentItem = (id: string) => {
    setRecentItems(prev => prev.filter(item => item.id !== id));
  };

  const clearRecentItems = () => {
    setRecentItems([]);
  };

  return {
    recentItems,
    addRecentItem,
    removeRecentItem,
    clearRecentItems
  };
}

export default useLocalStorage;