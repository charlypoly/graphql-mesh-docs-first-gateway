import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Book } from './entities/Book';
import { Category } from './entities/Category';

@ApiTags('books')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/books')
  @ApiResponse({
    status: 200,
    type: [Book],
  })
  books() {
    return this.appService.listBooks();
  }

  @Get('/categories')
  @ApiResponse({
    status: 200,
    type: [Category],
  })
  categories() {
    return this.appService.listBookCategories();
  }

  @ApiResponse({
    status: 200,
    type: Book,
  })
  @ApiResponse({
    status: 404,
  })
  @Get('/books/:id')
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
  })
  book(@Param() params) {
    return this.appService.findOneBook(params.id);
  }
}
