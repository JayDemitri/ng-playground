import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { BrowserStorageService } from './browser-storage.service';
import { BehaviorSubject } from 'rxjs';

const LOCAL_STORAGE_KEY = 'ngp-'

@Injectable({
  providedIn: 'root'
})
export class ThemeManagerService {

  // Our document instance
  private document = inject(DOCUMENT)
  
  // Browser storage service
  private bStore = inject(BrowserStorageService)

  constructor() {

    console.log('Theme Manager Started');

    this.bStore.set('ngp-msg', 'Ng Playground Message')
    
    console.log(this.bStore.get('ngp-msg'))
  }

}
