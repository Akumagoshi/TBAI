'use client';

/**
 * Throttle function to limit the rate at which a function can fire
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time limit in milliseconds
 * @returns {Function} - Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Debounce function to delay the execution of a function until after a specified time
 * @param {Function} func - The function to debounce
 * @param {number} wait - The time to wait in milliseconds
 * @param {boolean} immediate - Whether to call the function immediately
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait, immediate = false) => {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

/**
 * Detects if the device is likely a mobile device based on screen size and/or user agent
 * @returns {boolean} - True if the device is likely a mobile device
 */
export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  
  // Check screen width
  const isMobileWidth = window.innerWidth < 768;
  
  // Check user agent for mobile devices (optional additional check)
  const isMobileAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  
  return isMobileWidth || isMobileAgent;
};

/**
 * Creates a passive event listener option object if supported by the browser
 * @returns {Object|boolean} - Passive event listener option or false
 */
export const getPassiveEventOptions = () => {
  let passiveIfSupported = false;
  
  try {
    window.addEventListener(
      'test',
      null,
      Object.defineProperty({}, 'passive', {
        get: function() {
          passiveIfSupported = { passive: true };
          return true;
        }
      })
    );
  } catch (err) {}
  
  return passiveIfSupported;
};
