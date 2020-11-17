import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { AboutComponent } from './components/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LinksComponent } from './components/links/links.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: 
  [AppComponent, 
    AboutComponent, 
    WelcomeComponent, 
    LinksComponent,
    NavigationComponent,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), 
    // RouterModule.forRoot([
    //   { path: '', component: HomePage, pathMatch: 'full' },
    //   { path: 'about', component: AboutComponent },
    //   { path: 'welcome', component: WelcomeComponent },
    //   { path: 'links', component: LinksComponent },
    //   { path: 'nav', component: NavigationComponent },
    // ]),
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
