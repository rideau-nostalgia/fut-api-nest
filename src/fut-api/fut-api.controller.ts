import { Controller, Get } from '@nestjs/common';
import { FutApiService } from './fut-api.service';

@Controller('fut-api')
export class FutApiController {

    constructor(private readonly futApiService: FutApiService) {}


    @Get('info')
    async findAll(): Promise<any> {
        return await this.futApiService.login();
    }

}
