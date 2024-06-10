import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sports: any[] = [];
  betSlip: any[] = []; // Array to store the events added to the bet slip

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/sports').subscribe((data: any) => {
      this.sports = data;
    });
  }

  addToBetSlip(event: any) {
    // Check if the event is already in the bet slip
    const eventExists = this.betSlip.some(e => e.id === event.id);
    if (!eventExists) {
      this.betSlip.push(event);
      console.log('Event added to bet slip:', event);
    } else {
      console.log('Event is already in the bet slip:', event);
    }
  }
}
