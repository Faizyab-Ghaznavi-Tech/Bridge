const configuredApiBase = import.meta.env.VITE_API_BASE_URL;
const isLocalBrowser =
  typeof window !== 'undefined' &&
  ['localhost', '127.0.0.1'].includes(window.location.hostname);
const defaultApiBase = isLocalBrowser ? 'http://localhost:3001/api' : '/api';
const shouldIgnoreLocalhostApi =
  configuredApiBase?.includes('localhost') && !isLocalBrowser;

export const API_BASE = (
  shouldIgnoreLocalhostApi ? defaultApiBase : configuredApiBase || defaultApiBase
).replace(/\/$/, '');
