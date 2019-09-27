import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

// instantiate a new user
export class NewUser {
    constructor(
        public firstName = '',
        public lastName = '',
        public email = '',
        public password = '',
        public passwordConfirmation = '',
    ) { }
}

// Custom validator to match passwords.
export function matchValidator(form: FormGroup) {
    const condition = form.get('password').value !== form.get('passwordConfirmation').value;
    return condition ? { mismatch: true } : null;
}

// Custom validator to confirm 3 unique characters.
export function uniqueValidator(control: AbstractControl) {
    const condition = new Set(control.value).size < 3;
    return condition ? { unique: true } : null;
}

// https://stackoverflow.com/questions/47884655/display-custom-validator-error-with-mat-error
export class CrossFieldErrorMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return control.touched && form.invalid;
    }
}

// https://stackoverflow.com/questions/47884655/display-custom-validator-error-with-mat-error
export const formErrors: { [key: string]: string } = {
    required: 'This is a required field',
    pattern: 'Email must be a valid email address (leia@alderaan.net).',
    minLength: 'Password must contain at least 8 characters.',
    mismatch: 'Passwords don\'t match.',
    unique: 'Passwords must contain at least 3 unique characters.'
};

@Component({
    selector: 'app-new-user-form',
    templateUrl: './new-user-form.component.html',
    styleUrls: ['./new-user-form.component.scss'],
})

export class NewUserFormComponent implements OnInit {
    newUserForm: FormGroup;
    newUser = new NewUser;
    httpErrors: string;
    formErrors = formErrors;
    crossFieldErrorMatcher = new CrossFieldErrorMatcher();
    hide = true;
    userSaved = false;

    constructor(private fb: FormBuilder) { }
    
    ngOnInit(): void {
        this.newUserForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern('[\\w\\.-]+@[\\w\\.-]+\\.\\w{2,4}')]],
            password: ['', [Validators.required, Validators.minLength(8), uniqueValidator]],
            passwordConfirmation: ['', Validators.required],
        }, { validator: matchValidator })
    ;}

    save(): void {
        if (this.newUserForm.valid) {
            const u = { ...this.newUser, ...this.newUserForm.value };
            
        } else {
            this.httpErrors = 'Please correct the validation errors.';
        }
    }

    onSaveComplete(): void {
        this.userSaved = true;
        setTimeout(function () {
            this.userSaved = false;
        }.bind(this), 3000);
        this.newUserForm.reset();
        return;
    }
}