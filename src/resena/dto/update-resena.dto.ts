import { PartialType } from '@nestjs/mapped-types';
import { CreateResenaDto } from './create-resena.dto';

export class UpdateResenaDto extends PartialType(CreateResenaDto) {}
