import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"tpclinicaonlinelaboiv","appId":"1:698671946829:web:f46fb475fa916c7989d004","storageBucket":"tpclinicaonlinelaboiv.appspot.com","apiKey":"AIzaSyCuVcasI5oD_uN_ij98BxZxvjU1ryqz0rE","authDomain":"tpclinicaonlinelaboiv.firebaseapp.com","messagingSenderId":"698671946829"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
