import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    signinForm!: FormGroup;
    loggedIn: boolean = false;
    user!: SocialUser;

    constructor(
        private fb: FormBuilder,
        private authService: SocialAuthService
    ) { }

    ngOnInit() {
        this.signinForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });

        this.authService.authState.subscribe((user: any) => {
            this.user = user;
            this.loggedIn = (user != null);
        });
    }
    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    signOut(): void {
        this.authService.signOut();
    }

    refreshToken(): void {
        this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
    }


}
