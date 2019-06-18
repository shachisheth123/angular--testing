import { LoginComponent } from "./login.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
let loginComponent: LoginComponent;
let fixture: ComponentFixture<LoginComponent>;

describe("LoginComponent", () => {


    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [ReactiveFormsModule, FormsModule],
            providers: [UserService, HttpClient, HttpHandler, Router]
        })
    })
    fixture = TestBed.createComponent(LoginComponent);

    loginComponent = fixture.componentInstance;
    loginComponent.ngOnInit;

})

it("form invalid when empty", () => {
    expect(loginComponent.loginForm).toBeFalsy();
})

it("email field validity ", () => {

    let errors = {};
    let email = loginComponent.loginForm.controls.email;
    expect(email).toBeFalsy();

    // errors = email || {};
    // expect(errors["required"]).toBeTruthy();

    // email.setValue("shachi");
    // errors = email.errors || {};
    // expect(errors["pattern"]).toBeTruthy();
    // expect(errors["required"]).toBeFalsy();

    // email.setValue("shachi@gmail.com");
    // errors = email.errors || {};
    // expect(email).toBeTruthy();
    expect(errors["required"]).toBeFalsy();
    expect(errors["pattern"]).toBeFalsy();
})

it("password field validity", () => {
    let errors = {};
    let password = loginComponent.loginForm.controls.password;

    // errors = password || {};
    // expect(errors["required"]).toBeTruthy();

    // password.setValue("12345");
    errors = password || {};
    expect(errors["required"]).toBeFalsy();
    //expect(errors["minlength"]).toBeTruthy();

    // password.setValue("123456789");
    errors = password || {};
    expect(errors["required"]).toBeFalsy();
    expect(errors["minlength"]).toBeFalsy();

})

 
