import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListaReproduccionService } from './lista-reproduccion.service';
import { CreateListaReproduccionDto } from './dto/create-lista-reproduccion.dto';
import { UpdateListaReproduccionDto } from './dto/update-lista-reproduccion.dto';

@Controller('lista-reproduccion')
export class ListaReproduccionController {
  constructor(private readonly listaReproduccionService: ListaReproduccionService) {}

  @Post()
  create(@Body() createListaReproduccionDto: CreateListaReproduccionDto) {
    return this.listaReproduccionService.create(createListaReproduccionDto);
  }

  @Get()
  findAll() {
    return this.listaReproduccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listaReproduccionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListaReproduccionDto: UpdateListaReproduccionDto) {
    return this.listaReproduccionService.update(+id, updateListaReproduccionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listaReproduccionService.remove(+id);
  }
}
