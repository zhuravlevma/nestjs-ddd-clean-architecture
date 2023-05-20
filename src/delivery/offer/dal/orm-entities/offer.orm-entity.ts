import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('offers', { schema: 'delivery' })
export class OfferOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  orderId: string;

  @Column({ nullable: true })
  deliverymanId: string | null;
}