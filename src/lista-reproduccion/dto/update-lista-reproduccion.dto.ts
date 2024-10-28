import { PartialType } from '@nestjs/mapped-types';
import { CreateListaReproduccionDto } from './create-lista-reproduccion.dto';

export class UpdateListaReproduccionDto extends PartialType(CreateListaReproduccionDto) {}
