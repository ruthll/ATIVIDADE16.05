import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPlanejamentoPage } from './novo-planejamento.page';

describe('NovoPlanejamentoPage', () => {
  let component: NovoPlanejamentoPage;
  let fixture: ComponentFixture<NovoPlanejamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoPlanejamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoPlanejamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
