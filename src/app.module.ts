import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FutApiController } from './fut-api/fut-api.controller';
import { FutApiService } from './fut-api/fut-api.service';
import { FutApiModule } from './fut-api/fut-api.module';

@Module({
  imports: [FutApiModule],
  controllers: [AppController, FutApiController],
  providers: [AppService, FutApiService],
})
export class AppModule {}
