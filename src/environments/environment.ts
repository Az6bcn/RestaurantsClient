import { UserManagerSettings } from './../app/models/user-manager-settings';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  baseAuth_url: 'http://localhost:5001',

  baseApi_url: 'http://localhost:500',
  oidc_settings: {
    authority: 'https://localhost:5001',
    client_id: 'restaurantAngularClient',
    redirect_uri: 'http://localhost:4200/signin-oidc-callback',
    post_logout_redirect_uri: 'http://localhost:4200',
    response_type: 'code',
    scope: 'openid profile restaurantAPI.fullaccess',
    accessTokenExpiringNotification: 5,
    loadUserinfo: true
  } as UserManagerSettings
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
