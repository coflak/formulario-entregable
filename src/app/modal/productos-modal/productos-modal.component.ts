import { Component, OnInit, Input } from '@angular/core';
import {CProducto} from 'src/app/classes/cProducto/cProducto';
import {FormGroup,FormBuilder,Validators}from '@angular/forms';
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-productos-modal',
  templateUrl: './productos-modal.component.html',
  styleUrls: ['./productos-modal.component.scss']
})
export class ProductosModalComponent implements OnInit {
  public formProductos:FormGroup;
  @Input()productos:CProducto;
   public isNew: boolean;
  public isSubmitted: boolean;

constructor(public formBuilder: FormBuilder,
      private modalService: BsModalService,
      public bsModalRef: BsModalRef) {
      this.isNew = false;
      this.isSubmitted = false;
    }

  ngOnInit(): void {
    if(this.productos===undefined){
      this.productos=new CProducto();
      this.isNew = true;

    }
    this.formProductos=this.formBuilder.group({
      codp:[this.productos.codp, [Validators.required, Validators.maxLength(10)]],
      desp:[this.productos.desp, [Validators.required, Validators.maxLength(10)]],
      valp:[this.productos.valp,[Validators.required]],

    });
  }
  public submit(){
      this.isSubmitted=true;
      if(!this.formProductos.invalid){
        let dataForm=this.formProductos.value;
        let productos:CProducto=dataForm as CProducto;
         if (this.isNew) {
                  
                  this.addProductos(productos);
                }
                else {
               
                  this.editProductos(productos);
                }
      }
  }

  private addProductos(productos:CProducto){
    var diss:[string,any]=['productos',productos];
     this.modalService.setDismissReason(diss as any);
       this.bsModalRef.hide();
  }
  private editProductos(productos:CProducto){
    var diss:[string,any]=['productos',productos];
     this.modalService.setDismissReason(diss as any);
       this.bsModalRef.hide();
  }

}
