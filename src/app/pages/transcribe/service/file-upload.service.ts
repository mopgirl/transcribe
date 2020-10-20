import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn : 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) {
  }

  upload(formData: FormData): void {
    this.http.post('', formData)
      .subscribe(
        data => console.log(data),
        error => console.log(error));
  }
}
