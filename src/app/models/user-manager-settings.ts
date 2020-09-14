import { WebStorageStateStore } from 'oidc-client';
export interface UserManagerSettings {
  authority: string;
  client_id: string;
  redirect_uri: string;
  response_type: string;
  scope: string;
  post_logout_redirect_uri: string;
  loadUserinfo: boolean;
  accessTokenExpiringNotification: number;
  // userStore = new WebStorageStateStore({ store: window.localStorage });
}
