/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from "class-validator";

export class AerolineaDto {
  readonly id: string;
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;
  @IsString()
  @IsNotEmpty()
  readonly descripcion: string;
  @IsString()
  @IsNotEmpty()
  readonly fechaFundacion: Date;
  @IsString()
  @IsNotEmpty()
  readonly paginaWeb: string;
}
