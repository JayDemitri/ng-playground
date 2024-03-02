import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';
import { BrowserStorageService } from './browser-storage.service';
import { BehaviorSubject } from 'rxjs';

const LOCAL_STORAGE_KEY = 'ngp-theme'

const DEFAULT_THEME = 'light'

@Injectable({
  providedIn: 'root'
})
export class ThemeManagerService {

  // Our document instance
  private document = inject(DOCUMENT)

  // Shortcut to our defaultView
  private _window = this.document.defaultView;

  // Browser storage service
  private bStore = inject(BrowserStorageService)

  // Create our theme signal
  themeSignal = signal<string>(DEFAULT_THEME);

  constructor() {


    // First we acre going to want to check for a saved preference in the local store
    this.setTheme(this.getPreferredTheme()) // Need to pass to the setTheme function like the following

    // if we have a window object and can perform media queries
    if (this._window !== null && this._window.matchMedia) {
      // We add and event listener to watch the os theme for changes and update the theme accordingly
      this._window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', () => {
          this.setTheme(this.getPreferredTheme())
        });
    }

    effect(() => {
      this.setThemeStyles(this.themeSignal())
      this.setStoredTheme(this.themeSignal())
    });

  }

  getPreferredTheme(): string {
    // First we check our stored theme which will return undefined or null ? if not set
    const storedTheme = this.getStoredTheme()
    // If we find our stored theme then we return it
    if (storedTheme) {
      return storedTheme
    }
    // Next we check the os default if found
    if (this._window !== null && this._window.matchMedia) {
      return this._window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    // Else we return our default
    return DEFAULT_THEME
  }

  getStoredTheme(): string | undefined {
    return JSON.parse(this.bStore.get(LOCAL_STORAGE_KEY) ?? '{}').theme;
  }

  setStoredTheme(theme: string): void {
    const meta = JSON.parse(this.bStore.get(LOCAL_STORAGE_KEY) ?? '{}');
    meta.theme = theme;
    this.bStore.set(LOCAL_STORAGE_KEY, JSON.stringify(meta));
  }

  setTheme(theme: string) {
    this.themeSignal.set(theme)
  }

  setThemeStyles(theme: string) {
    if (theme === 'dark') {
      this.document.body.classList.add('dark-mode')
    } else {
      /* istanbul ignore next */
      this.document.body.classList.remove('dark-mode')
    }
  }

  /**
   * Update theme based on the current theme
   */
  /* istanbul ignore next */
  updateTheme() {
    this.themeSignal.update(theme => theme === 'dark' ? 'light' : 'dark')
  }

}
