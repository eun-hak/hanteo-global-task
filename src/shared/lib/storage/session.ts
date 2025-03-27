export const setSession = <T>(key: string, value: T) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSession = <T>(key: string): T | null => {
  const raw = sessionStorage.getItem(key);
  return raw ? JSON.parse(raw) : null;
};
