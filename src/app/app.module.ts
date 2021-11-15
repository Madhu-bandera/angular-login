import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
    GoogleLoginProvider,
} from 'angularx-social-login';
import {
    NbThemeModule, NbCardModule

} from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SocialLoginModule,
        ReactiveFormsModule,
        NbThemeModule.forRoot(),
        NbButtonModule,
        NbCardModule,
        NbLayoutModule,
        NbSidebarModule.forRoot(),
        NbThemeModule.forRoot({ name: 'default' }),
        NbEvaIconsModule

    ],
    providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(
                            '334921080524-7a8irkm9m46ag856bu130hjrithmgg0p.apps.googleusercontent.com'
                        )
                    },

                ]
            } as SocialAuthServiceConfig,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
