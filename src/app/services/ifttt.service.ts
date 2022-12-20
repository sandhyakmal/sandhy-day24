import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIftttData } from '../interfaces/i-ifttt-data';
import { INotifIfttt } from '../interfaces/i-notif-ifttt';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class IftttService {

  private baseURL: string = "https://maker.ifttt.com/trigger/{event}/with/key/{key}";

  constructor(private http: HttpClient, private baseHttp: BaseHttpService){ }

  public send(notificationsData: INotifIfttt, data : IIftttData):Observable<any>{
    const headers = {
      "Content-Type": "applicatiion/json"
    };
    // console.log(notificationsData)
    let urlClean = this.baseURL.replace("{event}",data.event).replace("{key}",data.key);
    console.log(urlClean);
    const body = JSON.stringify(notificationsData);
    // console.log(body);
    return this.http.post<any>(urlClean,body,{headers})
  }
}
