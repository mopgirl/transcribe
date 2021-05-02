import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../pages/transcribe/service/file-upload.service';
import { FormGroup } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { FileItem } from 'ng2-file-upload/file-upload/file-item.class';

const URL = 'http://localhost:3000/s3/upload';

@Component({
  selector : 'app-transcribe',
  templateUrl : './transcribe.component.html',
  styleUrls : ['./transcribe.component.less']
})
export class TranscribeComponent implements OnInit {
  uploader: FileUploader;

  constructor(private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.uploader = new FileUploader({
      url : URL,
      itemAlias : ''
    });
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: FileItem, status: any) => {
      console.log(`Uploaded File Details ${ item.file.name }`);
      this.toastr.success('upload');
    };
  }
}
