import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { TopPageModel, TopPageSchema } from './top-page.model';
import { TopPageService } from './top-page.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HhModule } from 'src/hh/hh.module';

@Module({
  controllers: [TopPageController],
  imports: [
    MongooseModule.forFeature([
      {
        name: TopPageModel.name,
        schema: TopPageSchema,
      },
    ]),
    HhModule,
  ],
  exports: [TopPageService],
  providers: [TopPageService],
})
export class TopPageModule {}
