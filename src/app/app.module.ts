import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; //ngModel lives here

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule //import FormsModule before binding with [(ngModel)]
   ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
