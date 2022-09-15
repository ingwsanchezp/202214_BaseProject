/* eslint-disable prettier/prettier */
import { AerolineaService } from './aerolinea.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AerolineaEntity } from './aerolinea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AerolineaEntity])],
  controllers: [],
  providers: [AerolineaService],
})
export class AerolineaModule {}
