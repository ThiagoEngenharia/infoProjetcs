import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'http://localhost:8080/api/form'; // Ajuste conforme o backend

  constructor(private http: HttpClient) {}

  postForm(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/form',data);
  }

  getAllForm():Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/forms/');
  }

  getFormById(id:number):Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/form'+id);
  }

  updateForm(id:number, form:any):Observable<any>{
    return this.http.put<any>('http://localhost:8080/api/form'+id, form);
  }

  deleteForm(id:number):Observable<any>{
    return this.http.delete<any>('http://localhost:8080/api/form'+id);
  }

}
