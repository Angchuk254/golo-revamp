import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { filter, map, switchMap, take } from 'rxjs/operators';

export const adminGuard = () => {
  const firebaseService = inject(FirebaseService);
  const router = inject(Router);

  return firebaseService.authInitialized$.pipe(
    filter(initialized => initialized === true),
    take(1),
    switchMap(() => firebaseService.currentUser$.pipe(
      take(1),
      map(user => {
        if (user) {
          return true;
        } else {
          router.navigate(['/admin/login']);
          return false;
        }
      })
    ))
  );
};
