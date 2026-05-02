import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitorsService {
  getVisitors(){
    return ["Tanish", "Sachin", "Nirupama", "Nick", "Girish"];
  }
}
