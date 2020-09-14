import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oidc-callback',
  templateUrl: './oidc-callback.component.html',
  styleUrls: ['./oidc-callback.component.scss']
})
export class OidcCallbackComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.processAuthorisationResponse();
  }

}
