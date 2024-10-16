import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from 'src/models/Events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  getAllEvents():Observable<Events[]>
  {
    //envoyer une requette en mode http
    return this.http.get<Events[]>('http://localhost:3000/Events');
  }
  addEvent(eventtoSave : Events):Observable <void>{
    return this.http.post<void>("http://localhost:3000/Events",eventtoSave);

  }
  getEventByID(id: String):Observable<Events>
  {
    //envoyer une requette en mode http
    return this.http.get<Events>(`http://localhost:3000/Events/${id}`);
  }
}
