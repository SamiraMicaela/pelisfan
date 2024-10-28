import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DirectoresService } from './directores.service';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';

@Controller('directores')
export class DirectoresController {
  constructor(private readonly directoresService: DirectoresService) {}

  @Post()
  create(@Body() createDirectorDto: CreateDirectorDto) {
    return this.directoresService.create(createDirectorDto);
  }

  @Get()
  findAll() {
    return this.directoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.directoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDirectorDto: UpdateDirectorDto) {
    return this.directoresService.update(+id, updateDirectorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.directoresService.remove(+id);
  }
}
