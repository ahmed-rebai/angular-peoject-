import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { member } from 'src/models/member';

@Injectable({
  providedIn: 'root'
})
//permet d'injecter le services dans les comp/services
export class MemberService {


  constructor(private http:HttpClient) { }
  getAllMembers():Observable<member[]>
  {
    //envoyer une requette en mode http
    return this.http.get<member[]>('http://localhost:3000/members');
  }
  getMember(id: String):Observable<member>
  {
    //envoyer une requette en mode http
    return this.http.get<member>(`http://localhost:3000/members/${id}`);
  }
  CreateMember(MembertoSave : member):Observable <void>{
    return this.http.post<void>("http://localhost:3000/members",MembertoSave);

  }
  DeleteMember(id: String): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/members/${id}`);
  }
  editMember(MembertoSave : member,id: String): Observable<void> {
    return this.http.put<void>(`http://localhost:3000/members/${id}`,MembertoSave)
  }

}
