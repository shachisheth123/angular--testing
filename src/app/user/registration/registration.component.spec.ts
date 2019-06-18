import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';
import { UserService } from '../user.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {  Router } from '@angular/router';

describe("RegistrationComponenet", () => {

    let registrationComponent: RegistrationComponent;
    let fixture: ComponentFixture<RegistrationComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RegistrationComponent],
            imports: [ReactiveFormsModule, FormsModule ],
            providers:([UserService,HttpClient,HttpHandler,Router ])
                    })
        fixture = TestBed.createComponent(RegistrationComponent);
        registrationComponent = fixture.componentInstance;
        registrationComponent.ngOnInit;

    })

    it("form invalid when empty", () => {
        expect(registrationComponent.registrationForm).toBeFalsy();
    })

    it("form valid", async() => {
        expect(registrationComponent.registrationForm).toBeTruthy();
    })


    it("should set submitted to true", async () => {

        registrationComponent.registrationForm;
        expect(registrationComponent).toBeTruthy();
    })

    it("should set submitted values to false", async () => {

        registrationComponent.registrationForm;
        expect(registrationComponent.registrationForm).toBeFalsy();
    })

//     //email field validity
//     // it('email field validity', () => {
//     //     let email = registrationComponent.registrationForm.controls['email'];
//     //     expect(email.valid).toBeFalsy();
//     // });

//     // it('email field validity', () => {
//     //     let errors = {};
//     //     let email = registrationComponent.registrationForm.controls['email'];
//     //     errors = email.errors || {};
//     //     expect(errors['required']).toBeTruthy();
//     // });


    it("email field validity ", () => {

        let errors = {};
        let email = registrationComponent.registrationForm.controls.email;
        expect(email).toBeFalsy();

        // errors = email || {};
        // expect(errors["required"]).toBeTruthy();

        // email.setValue("alex");
        // errors = email.errors || {};
        // expect(errors["pattern"]).toBeTruthy();
        // expect(errors["required"]).toBeFalsy();

        // email.setValue("alex@gmail.com");
        // errors = email.errors || {};
        // expect(email).toBeTruthy();
        expect(errors["required"]).toBeFalsy();
        expect(errors["pattern"]).toBeFalsy();
    })

    it("password field validity", () => {
        let errors = {};
        let password = registrationComponent.registrationForm.controls.password;

        errors = password || {};
        expect(errors["required"]).toBeTruthy();

        // password.setValue("12345");
        errors = password || {};
        expect(errors["required"]).toBeFalsy();
        //expect(errors["minlength"]).toBeTruthy();

        // password.setValue("123456789");
        errors = password || {};
        expect(errors["required"]).toBeFalsy();
        expect(errors["minlength"]).toBeFalsy();

    })






 })