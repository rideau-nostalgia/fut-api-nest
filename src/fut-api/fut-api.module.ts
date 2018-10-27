import { Module, HttpModule } from '@nestjs/common';
import { FutApiController } from './fut-api.controller';
import { FutApiService } from './fut-api.service';

@Module({
    imports:[HttpModule.register({
        maxRedirects: 20,
      })],
    controllers: [FutApiController],
    providers: [FutApiService],
})
export class FutApiModule {}
