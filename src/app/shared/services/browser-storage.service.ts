import { Inject, Injectable, InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage,
});

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {

  /**
   * 
   * @param storage 
   */
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}

  /**
   * Get item by key from localStorage
   * @param key
   * @returns 
   */
  get(key: string) {
    return this.storage.getItem(key);
  }

  /**
   * Set item by key in localStorage
   * @param key 
   * @param value 
   */
  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  /**
   * Remove item by key from localstorage
   * @param key 
   */
  remove(key: string) {
    this.storage.removeItem(key);
  }

  /**
   * Clears all items associated from localStoage
   */
  clear() {
    this.storage.clear();
  }

}
