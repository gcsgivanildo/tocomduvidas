import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoAulaComponent } from './pedido-aula.component';

describe('PedidoAulaComponent', () => {
  let component: PedidoAulaComponent;
  let fixture: ComponentFixture<PedidoAulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoAulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
