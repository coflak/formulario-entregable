import { EmpleadosComponent } from 'src/app/pages/empleados/empleados.component';


export class CEmpleados{
    public ide: string;
    public nom: string;
    public sal: number;
    public fecha: Date;

    constructor(){
        this.ide="";
        this.nom="";
        this.sal=0; 
        this.fecha=new Date();
    }
}