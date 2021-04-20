import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { tarea } from '../../interfaces/tarea';


@Component({
  selector: 'app-clientes-nuestros',
  templateUrl: './clientes-nuestros.component.html',
  styleUrls: ['./clientes-nuestros.component.css']
})
export class ClientesNuestrosComponent implements OnInit {

  tarjeta:  tarea [] = []
  
  constructor(private tareaService: TareaService) { }
  

  obtenertareas(){  

  }
  ngOnInit(): void {
    this.tareaService.gettareas().subscribe(todo => {this.tarjeta = todo;
      console.log(this.tarjeta);
      
     
    });    
  }

}
