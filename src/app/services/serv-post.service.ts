import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterfacePost } from '../interfaces/interface-post';

@Injectable({
  providedIn: 'root'
})
export class ServPostService {

  private baseURL: string = " https://jsonplaceholder.typicode.com" 

  constructor(private http: HttpClient) {  }

  getAllData(): Observable<InterfacePost[]>{
    return this.http.get<InterfacePost[]>(`${this.baseURL}/posts`);
  }
}
