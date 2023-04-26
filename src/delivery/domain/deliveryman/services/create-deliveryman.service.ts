import { Injectable } from '@nestjs/common';
import {
  CreateDeliverymanDto,
  CreateDeliverymanUseCase,
} from 'src/delivery/domain/deliveryman/ports/in/create-deliveryman.use-case';
import { DeliverymanEntity } from 'src/delivery/domain/deliveryman/entities/deliveryman.entity';
import { v4 as uuid } from 'uuid';
import { CreateDeliverymanPort } from '../ports/out/create-deliveryman.port';

@Injectable()
export class CreateDeliverymanService implements CreateDeliverymanUseCase {
  constructor(private createDeliverymanPort: CreateDeliverymanPort) {}

  createDeliveryman(
    createDeliverymanDto: CreateDeliverymanDto,
  ): Promise<DeliverymanEntity> {
    return this.createDeliverymanPort.createDeliveryman(
      new DeliverymanEntity(
        uuid(),
        createDeliverymanDto.firstName,
        createDeliverymanDto.lastName,
        false,
        [],
      ),
    );
  }
}
