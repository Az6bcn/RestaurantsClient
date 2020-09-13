import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFG: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginFG = this.buildLoginFG(this.fb);
  }


  buildLoginFG(builder: FormBuilder) {
    return builder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
