import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  myDate = new Date();
  today = (new Date()).getDay();
  day!: string; // Define the day variable to hold the day name
  data$!: Observable<any>;
  data:any
  info$!: Observable<any>;
  userInfo:any
  
  constructor(private http: HttpClient){
    this.setDay();
  }

  setDay() {
    switch (this.today) {
      case 0:
        this.day = 'Sunday';
        break;
        case 1:
          this.day = 'Monday';
          break;
        case 2:
          this.day = 'Tuesday';
          break;
        case 3:
          this.day = 'Wednesday';
          break;
        case 4:
          this.day = 'Thursday';
          break;
        case 5:
          this.day = 'Friday';
          break;
        case 6:
          this.day = 'Saturday';
          break;
          default:
            this.day = 'Invalid day';
            break;    
    }
  }

  ngOnInit() {
    this.data$ = this.getData();
    this.data$.subscribe((res) => {
      this.data = res;
    })

    this.info$ = this.getUserInfo();
    this.info$.subscribe((res) => {
      this.userInfo = res
    })
  }

  getData(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/pending');
  }

  

  getUserInfo(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/users');
  }
}
