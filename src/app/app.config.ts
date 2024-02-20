import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"repairpad-playground","appId":"1:934968069815:web:10d0415943fc83de5fc732","storageBucket":"repairpad-playground.appspot.com","apiKey":"AIzaSyBZI8qGIPYuDnrwF8CW_5rFyZZ0Ah_vAys","authDomain":"repairpad-playground.firebaseapp.com","messagingSenderId":"934968069815","measurementId":"G-J7L8J8EL9F"}))), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, importProvidersFrom(provideFirestore(() => getFirestore()))]
};
