import { AeropuertoEntity } from 'src/aeropuerto/aeropuerto.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class AerolineaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  fechaFundacion: Date;

  @Column()
  paginaWeb: string;

  @ManyToOne(() => AeropuertoEntity, (aeropuerto) => aeropuerto.aerolineas)
  aeropuerto: AeropuertoEntity;
}
