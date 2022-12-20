import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../service/weather.service';

@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent implements OnInit {

  search:any;
  temp:any;
  name:any;
  country:any;
  weather:any;
  min:any;
  max:any;
  icon:any;
  res:any;
  lat = 25.1756544;
  long =75.8841344;
  googleMapType = 'satellite';
  
  userAddress: any;
  userLatitude: any;
  userLongitude: any;

  constructor(private service:WeatherService) {}

  ngOnInit(): void {
    // this.postapi();
  } 

  getval(val:any){
    this.search=val;
    console.log(this.search);

    localStorage.setItem('data',JSON.stringify(val));
    
    this.service.weatherapi().subscribe((res:any)=>{
      console.log(res);
      this.lat=res.coord.lat;
      this.long=res.coord.lon;

      this.res=res;
      this.temp=res.main.temp_max;
      this.name=res.name;
      this.country=res.sys.country;
      this.weather=res.weather[0].main;
      this.min=res.main.temp_min;
      this.max=res.main.temp_max;
      this.icon=res.weather[0].icon;
    })
  }
  
 
  // senddata={
    //   name:'Gautam',
    //   email:'gautam@gmail.com',
    //   phone:'1234567890',
    //   state_id:1,
    //   city_id:2,
    //   subject:"fgftwfs",
    //   message:'vsivwvmsxx'
    // }

  // postapi(){
  //   console.log(this.senddata);
    
  //   this.service.post("/contactend",this.senddata).subscribe((res:any)=>{
  //    console.log(res)
  //   })
  // }


}
