import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductModel, ProductSchema } from './product.model';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ProductController],
  imports: [
    MongooseModule.forFeature([
      {
        name: ProductModel.name,
        schema: ProductSchema,
      },
    ]),
  ],
  providers: [ProductService],
})
export class ProductModule {}
