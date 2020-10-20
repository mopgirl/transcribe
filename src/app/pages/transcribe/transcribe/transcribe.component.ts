import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../service/file-upload.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector : 'app-transcribe',
  templateUrl : './transcribe.component.html',
  styleUrls : ['./transcribe.component.less']
})
export class TranscribeComponent implements OnInit {
  form: FormGroup;

  constructor(private uploadService: FileUploadService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      file : new FormGroup(null)
    });
  }

  upload(files: Array<File>): void {
    if (files.length <= 0) {
      return;
    }
    const file = files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);
    this.uploadService.upload(formData);
  }

}
