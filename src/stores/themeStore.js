import { writable } from 'svelte/store';

const createLocalStore = (key, startValue) => {
  const { subscribe, set, update } = writable(startValue);

  return {
    subscribe,
    set,
    update,
    useLocalStorage: () => {
      const json = localStorage.getItem(key);
      if (json) {
        set(JSON.parse(json));
      }

      subscribe((current) => {
        localStorage.setItem(key, JSON.stringify(current));
      });
    },
  };
};

const THEME_KEY = 'theme';
const THEME_VALUE = 'light';
export const themeStore = createLocalStore(THEME_KEY, THEME_VALUE);
