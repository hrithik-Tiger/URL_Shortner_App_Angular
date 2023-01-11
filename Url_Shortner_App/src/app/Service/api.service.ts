import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams  } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../enviroments/enviroment"
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
 api:string="";
  constructor(private http: HttpClient) {
  const api= 'https://api.shrtco.de/v2/shorten';
  

  }


  getShortUrl(url:string){
  //   let urlSearchParams = new URLSearchParams();
  //   urlSearchParams.append("url", url);
  // const headers= new HttpHeaders()
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*')
  // .set('status','201 Created')

  // const _params = new HttpParams()
  // .set("url", url)

  // const httpOptions = {
  //   headers: headers,
  //   params: _params,
  //   withCredentials: true
  // };
  
  
     this.api= "https://api.shrtco.de/v2/shorten/";
    const urlParams = new HttpParams().set('url',url);
    //return this.http.get<any>(`https://api.shrtco.de/v2/shorten?url=${url}`);

    return url;
  }

  }




