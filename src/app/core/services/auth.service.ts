import { AuthenticatedUser } from './../../models/authenticated-user';
import { UserService } from './../../services/user.service';
import { UserManagerSettings } from './../../models/user-manager-settings';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { UserManager, WebStorageStateStore, User } from 'oidc-client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private oidc_settings = environment.oidc_settings as UserManagerSettings;

  private userManager: UserManager = new UserManager({
    ...this.oidc_settings,
    userStore: new WebStorageStateStore({ store: window.localStorage })
  });
  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  /**
   * Redirect user to IdentityServer log-in page.
   */
  async startAuthentication() {
    await this.userManager.signinRedirect();
  }

  /**
   * Process the response from the authz endpoint (in the redirectUrl)
   * i.e receives and handles incoming tokens,
   * including token validation. At this point, we've effectively closed the loop and completed
   * the authentication process. We now have information about the authenticated User.
   */
  async processAuthorisationResponse(): Promise<void> {
    const authenticatedUser = await this.userManager.signinRedirectCallback();

    if (authenticatedUser) {
      // const user = {
      //   fullname: authenticatedUser.
      // } as AuthenticatedUser;
    }
  }

  decodeIdentityToken() {

  }

  isLoggedIn() {

  }



}
