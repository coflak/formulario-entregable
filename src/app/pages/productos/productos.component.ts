import { Component, OnInit } from '@angular/core';
import { CProducto } from 'src/app/classes/cProducto/cProducto';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ProductosModalComponent}from 'src/app/modal/productos-modal/productos-modal.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
   public lst: CProducto[];
   public subscriptions:Subscription[];

  constructor(private modalService: BsModalService) {
    this.lst=[];
     this.subscriptions = [];
    
   }

  ngOnInit(): void {
      // this.llenarLista();
    }

    private llenarLista(){
      for (let i=1;i<=7;i++){
         var producto=new CProducto(); 
         producto.codp=(i * 1000).toString() + "00";
         producto.desp="productos" + i;
         producto.valp=100000 + i * 20000;
         this.lst.push(producto);
      }
  }
  public openModal(){
    this.modalService.show(ProductosModalComponent, { keyboard: false, ignoreBackdropClick: true });
    this.subscriptions.push(
       this.modalService.onHidden.subscribe((reason: any) => {
         if (reason[0] === "productos") {
            var result: any = reason[1];
            this.lst.push(result as CProducto);
            this.unsubscribe();
           }
         })
       );
    }
  public openEditModal(productos:CProducto){
    const initialState = {
            productos:productos
          }
      this.modalService.show(ProductosModalComponent, { initialState, keyboard: false, ignoreBackdropClick: true });
      this.subscriptions.push(
        this.modalService.onHidden.subscribe((reason:any)=>{
          if(reason[0]==="productos"){
            this.lst.forEach((x,i)=>{
              if(x.codp===productos.codp){
                this.lst.splice(i,1)
              }
            });
            var result:any=reason[1];
            this.lst.push(result as CProducto);
            this.unsubscribe();
          }
        })
      );
  }
  public delete(productos:CProducto){
    this.lst.forEach((x,i)=>{
      if(x.codp=== productos.codp){
        this.lst.splice(i,1);
      }
    });
  }
   public unsubscribe() {
        this.subscriptions.forEach((subscription: Subscription) => {
          subscription.unsubscribe();
        });
        this.subscriptions = [];
      }
}

