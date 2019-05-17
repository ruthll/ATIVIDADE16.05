import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-novo-planejamento',
  templateUrl: './novo-planejamento.page.html',
  styleUrls: ['./novo-planejamento.page.scss'],
})
export class NovoPlanejamentoPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
    this.mensagem = ""
    
  }
  mensagem;

  

  salvar(form) {
    const planoString = JSON.stringify(form.value)
    const planoc = form.value.nome

    localStorage.setItem(planoc, planoString)
    
    console.log(form.value)

    form.reset()

    this.nav.back()
    
  }
   
}
