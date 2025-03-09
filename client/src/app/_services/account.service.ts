import { Injectable, inject } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private http = inject(HttpClient)
  baseurl = 'https://localhost:5001/api/';
  Login(model: any) {
    return this.http.post(this.baseurl+'account/login', model);
  }
}
