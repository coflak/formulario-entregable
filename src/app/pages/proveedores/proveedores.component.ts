import { Component, OnInit } from '@angular/core';
import { CProveedor } from 'src/app/classes/cProveedor/cproveedor'

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {
   
  public lst: CProveedor[];
  
  constructor() {
    this.lst=[];
   }

  ngOnInit(): void {
    this.llenarLista();
  }

  private llenarLista(){
    for (let i=1;i<=10;i++){
       var proveedor=new CProveedor; 
       proveedor.idep=(i * 1000).toString() + "00";
       proveedor.nomp="proveedor" + i;
       proveedor.cupo=1000000 + i * 20000;
       this.lst.push(proveedor);
    }
  }

}
