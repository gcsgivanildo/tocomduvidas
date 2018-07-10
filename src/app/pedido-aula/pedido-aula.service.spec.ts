import { TestBed, inject } from '@angular/core/testing';

import { PedidoAulaService } from './pedido-aula.service';

describe('PedidoAulaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PedidoAulaService]
    });
  });

  it('should be created', inject([PedidoAulaService], (service: PedidoAulaService) => {
    expect(service).toBeTruthy();
  }));
});
