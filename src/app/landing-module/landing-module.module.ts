import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingModuleRoutingModule } from './landing-module-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingserviceService } from './landingservice.service';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule,
    LandingModuleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LandingserviceService]
})
export class LandingModuleModule { }
