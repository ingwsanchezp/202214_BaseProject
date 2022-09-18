/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { AeropuertoDto } from 'src/aeropuerto/aeropuerto.dto';
import { AeropuertoEntity } from 'src/aeropuerto/aeropuerto.entity';
import { AerolineaAeropuertoService } from './aerolinea-aeropuerto.service';

@Controller('airlines')
export class AerolineaAeropuertoController { 
    constructor(private readonly aerolineaAeropuerto: AerolineaAeropuertoService){}

    @Get(':airlineId/airports')
    async findAeropuertosDesdeAerolinea(@Param('airlineId') aerolineaId: string){
        return await this.aerolineaAeropuerto.findAeropuertosDesdeAerolinea(aerolineaId);
    }

    @Get(':airlineId/airports/:airportId')
    async findAeropuertoDesdeAerolinea(@Param('airportId') aeropuertoId: string, @Param('airlineId') aerolineaId: string){
        return await this.aerolineaAeropuerto.findAeropuertoDesdeAerolinea(aeropuertoId, aerolineaId);
    }

    @Post(':airlineId/airports')
    async addAeropuertoParaAerolinea(@Param('airlineId') aerolineaId: string, @Body() aeropuertoDto: AeropuertoDto){
        const aeropuerto: AeropuertoEntity = plainToInstance(AeropuertoEntity, aeropuertoDto)
        return await this.aerolineaAeropuerto.addAeropuertoParaAerolinea(aerolineaId, aeropuerto);
    }

    @Put(':airlineId/airport/old/:airportOldId/new/:airportNewId')
    async updateAeropuertoDesdeAerolinea(@Param('airlineId') aerolineaId: string, @Param('airportOldId') aeropuertosAntiguoId: string, @Param('airportNewId') aerpuertoNuevoId: string){
        return await this.aerolineaAeropuerto.updateAeropuertoDesdeAerolinea(aerolineaId, aeropuertosAntiguoId, aerpuertoNuevoId);
    }

    @Delete(':airlineId/airports/:airportId')
    @HttpCode(204)
    async deleteAeropuertoDesdeAerolinea(@Param('airlineId') aerolineaId: string, @Param('airportId') aeropuertoId: string){
        return await this.aerolineaAeropuerto.deleteAeropuertoDesdeAerolinea(aerolineaId, aeropuertoId);
    }
}
