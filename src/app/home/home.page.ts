import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numSecreto: number = 0;
  numUsuario: number = 0;
  txtMensaje: string = "";
  esCorrecto: boolean= false;

  constructor() {
    this.generarNumSecreto();
  }

  comprobarNumero() {
    console.log("clic en boton");
    console.log("numUsuario="+this.numUsuario);
    if(this.numUsuario == this.numSecreto){
      console.log("¡¡Ha acertado!!");
      this.txtMensaje = ("¡¡Ha acertado!!");
      this.esCorrecto = true;
    } else if(this.numSecreto > this.numUsuario){
      console.log("numSecreto es mayor")
      this.txtMensaje = ("El numero secreto es mayor");
    } else if(this.numSecreto < this.numUsuario){
      console.log("numSecreto es menor")
      this.txtMensaje = ("El numero secreto es menor");
    }
  }

  generarNumSecreto() {
    this.numSecreto = Math.floor(Math.random()*100+1);
    console.log("numsecreto="+this.numSecreto)
  }

  newNumeroSecreto(){
    this.generarNumSecreto();  //no olvidar los parentesis al final de los metodos
    this.esCorrecto=false;
  }

}
