import { Injectable, inject, signal } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { User } from '../_models/user';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import { LikesService } from './likes.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private likeService = inject(LikesService);
  private http = inject(HttpClient)
  baseurl = environment.apiUrl;
  currentUser = signal<User | null>(null);


  Login(model: any) {
    return this.http.post<User>(this.baseurl+'account/login', model).pipe(
      map(user => {
        if(user){
          this.setCurrentUser(user);
        }
      })
    )
  }

  setCurrentUser(user: User){
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser.set(user);
    this.likeService.getLikesIds();
  }

  Register(model: any) {
    return this.http.post<User>(this.baseurl+'account/register', model).pipe(
      map(user => {
        if(user){
          this.setCurrentUser(user);
        }
        return user;
      })
    )
  }

  Logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
