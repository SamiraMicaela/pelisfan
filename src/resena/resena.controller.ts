import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResenaService } from './resena.service';
import { CreateResenaDto } from './dto/create-resena.dto';
import { UpdateResenaDto } from './dto/update-resena.dto';

@Controller('resena')
export class ResenaController {
  constructor(private readonly resenaService: ResenaService) {}

  @Post()
  create(@Body() createResenaDto: CreateResenaDto) {
    return this.resenaService.create(createResenaDto);
  }

  @Get()
  findAll() {
    return this.resenaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resenaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResenaDto: UpdateResenaDto) {
    return this.resenaService.update(+id, updateResenaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resenaService.remove(+id);
  }
}
