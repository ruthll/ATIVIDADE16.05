import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovoPlanejamentoPage } from './novo-planejamento.page';

const routes: Routes = [
  {
    path: '',
    component: NovoPlanejamentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NovoPlanejamentoPage]
})
export class NovoPlanejamentoPageModule {}
