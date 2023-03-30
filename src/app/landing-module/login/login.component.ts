import { Component } from '@angular/core';
import {LandingserviceService } from '../landingservice.service';
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  ngOnInit() {
    let counter = 1;
    setInterval(() => {
      const radioBtn = document.getElementById(`radio${counter}`) as HTMLInputElement;
      radioBtn.checked = true;
      counter++;
      if (counter > 4) {
        counter = 1;
      }
    }, 5000);
  }

  loginForm = new FormGroup({
    email : new FormControl('',[ Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  constructor(public fb1:FormBuilder, public router : Router,public landserviceService:LandingserviceService){}
  showPassword = false;
  showPasswordIcon = 'fa-eye';

  togglePasswordVisibility(passwordInput: any) {
    this.showPassword = !this.showPassword;
    this.showPasswordIcon = this.showPassword ? 'fa-eye-slash' : 'fa-eye';
    passwordInput.type = this.showPassword ? 'text' : 'password';
  }
  ngOnIit(){}
  get uservalidators(){
    return this.loginForm.get('user')
  }

  get passwordValidators(){
    return this.loginForm.get('password')
  }

  loginuser(data: any){
    this.landserviceService.users(data).subscribe((res:any)=>{
      this.landserviceService.users(data)
      console.log("login User: ",res)

      var today = new Date();
      var expire = new Date();

      expire.setTime(today.getTime() + 3600000*24*15);
      document.cookie = "name= " + res.Token + ";path=/" + ";expires=" + expire.toUTCString();
    })
  }

submit(){
  this.router.navigate(['/dashboard']) //your router URL need to pass it here
}

onSubmit(data1:any){
  console.log(this.loginForm.value);
  this.landserviceService.users(data1).subscribe((res: any)=>{
    this.landserviceService.users(this.loginForm)
    console.log("login User: ", res)
    console.log("login User: ", res.token)

    // this.cookieToken = this.cookieService.set(data1.name,res.token, );
    // this.cookieMyToken = this.cookieToken;
    // console.log(this.cookieMyToken);
  })

}


}
