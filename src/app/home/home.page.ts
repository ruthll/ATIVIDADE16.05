import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router){
    this.planos = []
  }

  planos;

  ngOnInit(){}

 


  listar(){
    this.planos = []

    const tamanhoDoBanco = localStorage.length

    for (let index = 0; index < tamanhoDoBanco; index++) {
      const chave = localStorage.key(index)
      const plano = localStorage.getItem(chave)

      const planoReal = JSON.parse(plano)
      this.planos.push(planoReal)
    }
  }
  excluir(nome){
    localStorage.removeItem(nome)
    this.listar()
  }


  ionViewDidEnter(){

    this.listar()
    
  }
}

