import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service';


@Component({
  selector: 'app-clientes-nuestros',
  templateUrl: './clientes-nuestros.component.html',
  styleUrls: ['./clientes-nuestros.component.css']
})
export class ClientesNuestrosComponent implements OnInit {

  objeto
  constructor(private tareaService: TareaService) { }


  obtenertareas(){
    this.tareaService.gettareas().subscribe(todo => {console.log(todo);
  });
  }

  ngOnInit(): void {
  }

}
