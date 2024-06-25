import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';

@Controller('api/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  // query param get
  @Get('find')
  queryParam(@Query('name') name: string, @Query('age') age: string) {
    return `return name: ${name}, age: ${age} person`;
  }

  // url param get
  @Get(':id')
  urlParam(@Param('id') id: string) {
    return `This action returns a #${id} person`;
  }

  //
  // @Get()
  // findAll() {
  //   return this.personService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.personService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
  //   return this.personService.update(+id, updatePersonDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.personService.remove(+id);
  // }
}
