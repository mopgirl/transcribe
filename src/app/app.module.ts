import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './pages/error/notfound/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { TranscribeModule } from './transcribe/transcribe.module';

@NgModule({
  declarations : [
    AppComponent,
    PageNotFoundComponent
  ],
  imports : [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    TranscribeModule
  ],
  providers : [],
  bootstrap : [AppComponent]
})
export class AppModule {
}
