import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationFormGroup: FormGroup;
  passwordFormGroup: FormGroup;

  constructor(public router: Router) { }

  show1: boolean;
  show2: boolean;
  show3: boolean;
  username: string = '';
  password: string = '';
  password2: string = '';

  ngOnInit() {
  }

  registerUser() {
    console.log(this.username);    
    console.log(this.password);

    if (this.username === "" ) {
      this.show1 = true;
    } else {
      this.show1 = false;
      if (this.password === "") {
        this.show2 = true;
      } else {
        this.show2 = false;
        if (this.password2 !== this.password) {
          this.show3 = true;
        } else {
          this.show3 = false;
        }
      }
    }
  }

}
