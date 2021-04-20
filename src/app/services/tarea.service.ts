import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tarea } from '../interfaces/tarea';




@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) 
  { }
   gettareas(){
    const Patch = 'https://fast-caverns-63520.herokuapp.com/api/user';
    return this.http.get<tarea[]>(Patch);
   }
  
}
