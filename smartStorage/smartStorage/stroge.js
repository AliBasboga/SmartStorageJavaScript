const StorageWrapper = {
  // 1. Save data to localStorage (JSON supported)
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  // 2. Read data (auto JSON.parse)
  get(key) {
    const item = localStorage.getItem(key);
    try {
      return JSON.parse(item);
    } catch (e) {
      return item; // if it is string, return directly
    }
  },

  // 3. Data Clear
  remove(key) {
    localStorage.removeItem(key);
  },

  // All Data Clear
  clear() {
    localStorage.clear();
  },

// 5. Add timed data (for example, delete after 5000 ms)
  setWithExpiry(key, value, ttl) {
    const data = {
      value: value,
      expiry: Date.now() + ttl
    };
    localStorage.setItem(key, JSON.stringify(data));
  },

  // 6. Checking and reading the expired data (delete if expired)
  getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    try {
      const item = JSON.parse(itemStr);
      if (!item.expiry) return item; // normal data if no expiry

      if (Date.now() > item.expiry) {
        localStorage.removeItem(key);// expired
        return null;
      }
      return item.value;
    } catch (e) {
      return null;
    }
  }
};
