import { useState, useMemo, useCallback } from 'react';

/**
 * Custom hook for filtering data with search functionality
 * @param {Array} data - The data array to filter
 * @param {Object} options - Configuration options
 * @param {string} options.searchField - Field to search in (for objects) or null for string arrays
 * @param {number} options.debounceMs - Debounce delay in milliseconds
 * @param {Function} options.customFilter - Custom filter function
 * @returns {Object} Filter state and methods
 */
export const useFilter = (data, options = {}) => {
  const {
    searchField = null,
    debounceMs = 300,
    customFilter = null,
  } = options;

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [debounceTimer, setDebounceTimer] = useState(null);

  // Enhanced filter logic
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) {
      return data;
    }

    const query = searchQuery.toLowerCase().trim();
    
    return data.filter((item) => {
      // Use custom filter if provided
      if (customFilter) {
        return customFilter(item, query);
      }

      // Handle different data types
      let searchText = '';
      
      if (typeof item === 'string') {
        searchText = item;
      } else if (typeof item === 'object' && item !== null) {
        if (searchField) {
          searchText = String(item[searchField] || '');
        } else {
          // Search in all string values of the object
          searchText = Object.values(item)
            .filter(val => typeof val === 'string')
            .join(' ');
        }
      }

      const itemLower = searchText.toLowerCase();

      // Exact match
      if (itemLower === query) return true;

      // Contains query
      if (itemLower.includes(query)) return true;

      // Word boundary search
      const words = query.split(' ').filter(word => word.length > 0);
      return words.some(word => itemLower.includes(word));
    });
  }, [searchQuery, data, searchField, customFilter]);

  // Debounced search handler
  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value);
    setIsSearching(true);

    // Clear existing timer
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    // Set new timer
    const timer = setTimeout(() => {
      setIsSearching(false);
    }, debounceMs);

    setDebounceTimer(timer);
  }, [debounceMs, debounceTimer]);

  // Clear search
  const clearSearch = useCallback(() => {
    setSearchQuery('');
    setIsSearching(false);
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
  }, [debounceTimer]);

  // Get search statistics
  const searchStats = useMemo(() => ({
    total: data.length,
    filtered: filteredData.length,
    hasResults: filteredData.length > 0,
    hasQuery: searchQuery.trim().length > 0,
  }), [data.length, filteredData.length, searchQuery]);

  return {
    // State
    searchQuery,
    isSearching,
    filteredData,
    searchStats,
    
    // Methods
    handleSearchChange,
    clearSearch,
    setSearchQuery,
  };
};

/**
 * Hook for filtering with multiple search fields
 * @param {Array} data - The data array to filter
 * @param {Array} searchFields - Array of field names to search in
 * @param {Object} options - Additional options
 */
export const useMultiFieldFilter = (data, searchFields, options = {}) => {
  const customFilter = useCallback((item, query) => {
    if (typeof item !== 'object' || item === null) return false;
    
    return searchFields.some(field => {
      const fieldValue = String(item[field] || '');
      return fieldValue.toLowerCase().includes(query);
    });
  }, [searchFields]);

  return useFilter(data, { ...options, customFilter });
};

/**
 * Hook for advanced filtering with multiple criteria
 * @param {Array} data - The data array to filter
 * @param {Object} filters - Filter criteria object
 */
export const useAdvancedFilter = (data, filters = {}) => {
  const [activeFilters, setActiveFilters] = useState(filters);

  const filteredData = useMemo(() => {
    return data.filter(item => {
      return Object.entries(activeFilters).every(([key, filterValue]) => {
        if (!filterValue || filterValue === '') return true;
        
        const itemValue = item[key];
        
        if (typeof filterValue === 'string') {
          return String(itemValue).toLowerCase().includes(filterValue.toLowerCase());
        }
        
        if (typeof filterValue === 'function') {
          return filterValue(itemValue, item);
        }
        
        if (Array.isArray(filterValue)) {
          return filterValue.includes(itemValue);
        }
        
        return itemValue === filterValue;
      });
    });
  }, [data, activeFilters]);

  const updateFilter = useCallback((key, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setActiveFilters({});
  }, []);

  const clearFilter = useCallback((key) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
  }, []);

  return {
    filteredData,
    activeFilters,
    updateFilter,
    clearFilters,
    clearFilter,
  };
}; 