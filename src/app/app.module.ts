import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { UserinterceptorService } from './services/userinterceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: UserinterceptorService,
    multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
