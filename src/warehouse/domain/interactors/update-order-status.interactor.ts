import { WarehouseEntity } from '../entities/warehouse.entity';
import {
  UpdateOrderStatusUseCase,
  UpdateOrderStatusDto,
} from '../ports/in/update-order-status.use-case';
import { GetWarehouseWithOrderPort } from '../ports/out/get-warehouse-with-order.port';
import { UpdateOrderPort } from '../ports/out/update-order.port';

export class UpdateOrderStatusInteractor implements UpdateOrderStatusUseCase {
  constructor(
    private readonly getWarehouseWithOrderPort: GetWarehouseWithOrderPort,
    private readonly updateOrderPort: UpdateOrderPort,
  ) {}
  async execute(
    updateOrderStatusDto: UpdateOrderStatusDto,
  ): Promise<WarehouseEntity> {
    const warehouse =
      await this.getWarehouseWithOrderPort.getWarehouseWithOrderPort(
        updateOrderStatusDto.warehouseId,
        updateOrderStatusDto.orderId,
      );

    warehouse.changeOrderStatusToValid(updateOrderStatusDto.orderId);

    return this.updateOrderPort.updateOrder(warehouse);
  }
}