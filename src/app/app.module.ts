import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, isPlatform, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DbserviceService } from './services/dbservice.service';
import { MenuprincipalComponent } from './components/menuprincipal/menuprincipal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MenuprincipalComponent],
  imports: [BrowserModule, IonicModule.forRoot({
    //global config para app
    rippleEffect: false,
    mode: 'md'
  }),
  AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DbserviceService],
  exports:[MenuprincipalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

