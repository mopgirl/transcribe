import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSelectDirective, FileUploadModule } from 'ng2-file-upload';
import { TranscribeComponent } from './transcribe/transcribe.component';


@NgModule({
  declarations : [
    TranscribeComponent,
    // FileSelectDirective
  ],
  exports : [
    TranscribeComponent
  ],
  imports : [
    CommonModule,
    FileUploadModule
  ]
})
export class TranscribeModule {
}
