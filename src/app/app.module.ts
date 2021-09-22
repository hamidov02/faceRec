import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToasterModule } from 'angular2-toaster';
import { FormsModule } from '@angular/forms';

import {FaceRecognitionService } from './services/face-recognition.service'

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FaceAnalyzeComponent } from './face-analyze/face-analyze.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FaceAnalyzeComponent,
    AboutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ToasterModule
  ],
  providers: [FaceRecognitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
