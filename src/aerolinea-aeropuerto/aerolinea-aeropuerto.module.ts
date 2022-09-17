/* eslint-disable prettier/prettier */
import { AerolineaAeropuertoService } from './aerolinea-aeropuerto.service';
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AerolineaEntity } from 'src/aerolinea/aerolinea.entity';
import { AeropuertoEntity } from 'src/aeropuerto/aeropuerto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AerolineaEntity, AeropuertoEntity])],
    controllers: [],
    providers: [
        AerolineaAeropuertoService,],
})
export class AerolineaAeropuertoModule { }
