import { Injectable } from '@nestjs/common';
import { AccountingOrderEntity } from 'src/delivery/domain/accounting-order/entities/accounting-order.entity';
import { FindOrderByIdUseCase } from '../ports/in/find-order-by-id.use-case';
import { FindOrderByIdPort } from '../ports/out/find-order-by-id.port';

@Injectable()
export class FindOrderByIdService implements FindOrderByIdUseCase {
  constructor(private findOrderByIdPort: FindOrderByIdPort) {}

  findOrderById(id: string): Promise<AccountingOrderEntity | null> {
    return this.findOrderByIdPort.findOrderById(id);
  }
}
