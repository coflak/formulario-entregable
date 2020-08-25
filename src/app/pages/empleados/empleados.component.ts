import { Component, OnInit } from '@angular/core';
import { CEmpleados} from 'src/app/classes/cEmpleados/cEmpleados';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {


  public lst: CEmpleados[];
  
  constructor() {
      this.lst=[];
   }

  ngOnInit(): void {
  
     this.llenar_lista();
  }

private llenar_lista(){
  for(let i=1;i<=6;i++){
    var empleados=new CEmpleados();
    empleados.ide="0000" +i.toString();
    empleados.nom="Empleado" + i;
    empleados.sal=2000000 + 1 * 100000;
    empleados.fecha=new Date(new Date().setDate(i)); 
    this.lst.push(empleados);
  }
}
}
