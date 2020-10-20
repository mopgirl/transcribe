import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranscribeComponent } from './pages/transcribe/transcribe/transcribe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './pages/error/notfound/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations : [
    AppComponent,
    TranscribeComponent,
    PageNotFoundComponent
  ],
  imports : [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers : [],
  bootstrap : [AppComponent]
})
export class AppModule {
}
