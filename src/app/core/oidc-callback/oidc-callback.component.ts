import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-oidc-callback',
  templateUrl: './oidc-callback.component.html',
  styleUrls: ['./oidc-callback.component.scss']
})
export class OidcCallbackComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.queryParams;
    const hasCode = Object.keys(params).some(x => x === 'code');

    if (hasCode) {
       this.authService.processAuthorisationResponse();

      const returnUrl = this.authService.getReturnURL().getValue();
      console.log('return url', returnUrl);

      if (returnUrl) {
        this.router.navigateByUrl(returnUrl);
        return;
      }
      return this.router.navigate(['home']);
    }

  }

}
