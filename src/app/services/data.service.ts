import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getAllComments(){
    return this.http.get('http://localhost:3000/comments');
  }

  getCurrentUser(){
    return this.http.get('http://localhost:3000/currentUser');
  }
}
