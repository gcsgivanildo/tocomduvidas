import { PedidoAulaModule } from './pedido-aula.module';

describe('PedidoAulaModule', () => {
  let pedidoAulaModule: PedidoAulaModule;

  beforeEach(() => {
    pedidoAulaModule = new PedidoAulaModule();
  });

  it('should create an instance', () => {
    expect(pedidoAulaModule).toBeTruthy();
  });
});
