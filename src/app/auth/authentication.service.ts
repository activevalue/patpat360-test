import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap } from 'rxjs';

import { Credentials, CredentialsService } from './credentials.service';
import { PostmanService } from './postman.service';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private credentialsService: CredentialsService,
    private postman: PostmanService
  ) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<any> {
    return this.postman.post(`Account/GetToken`, context).pipe(
      switchMap((data: any) => {
        this.credentialsService.setCredentials(data, context.remember);
        return of(data);
      }),
      catchError((err: any) => {
        throw err;
      })
    );

    // this.credentialsService.setCredentials(data, context.remember);
    // return of(data);
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
