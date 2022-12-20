import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  data:any

  constructor(private http:HttpClient) {}

  urlstart:any="http://api.openweathermap.org/data/2.5/weather?q="
  urlend:any="&units=metric&appid=d3254581617d0f0612f1bd97da11323a"

  weatherapi(){
    return this.http.get(this.urlstart+this.get()+this.urlend);
  }

  get(){
      return JSON.parse(localStorage.getItem('data') || '{}');
  } 
   
  post(url:any,data:any){
   return this.http.post("https://www.team.propira.com/demotesting/api"+url,data);
  } 

}
  
