import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

// Angular Material dependency
import 'hammerjs';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent, PageNotFoundComponent, ContactComponent, FooterComponent,
    WorkExperienceComponent, NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      // {
      //   path: '',
      //   redirectTo: '/home',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'home',
      //   component: HomeComponent
      // },
      // {
      //   path: 'about',
      //   component: AboutComponent
      // },
      // {
      //   path: 'contact',
      //   component: ContactComponent
      // },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
