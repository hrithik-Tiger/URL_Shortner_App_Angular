import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams  } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../enviroments/enviroment"
@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
  constructor(private http: HttpClient) {}
  shortenUrl(longUrl: string): Observable<{ link: string }> {
    
  const urlParams = new HttpParams().set('url',longUrl);
 
    console.log("Inside s : "+longUrl)
    return this.http.post<{ link: string }>(
      `${environment.api}` ,
      {url:longUrl}
     // {'params':urlParams}
    );
  }
}
