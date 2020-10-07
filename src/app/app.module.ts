import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './Providers/Interceptors';
import { StoreModule } from '@ngrx/store';
import * as fromContact from '@app/store/reducers/contact.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ContactEffects } from './store/effects/contact.effects';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    StoreModule.forRoot({contacts: fromContact.reducer}),
    EffectsModule.forRoot([ContactEffects]),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
