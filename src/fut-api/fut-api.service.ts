import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class FutApiService {

    static AUTH_URL:string = 'utas.mob.v4.fut.ea.com:443';
    static CLIENT_ID:string = 'FIFA-19-WEBCLIENT';
    static PIN_URL:string = 'https://pin-river.data.ea.com/pinEvents';
    static FUN_CAPTCHA_PUBLIC_KEY:string = 'A4EECF77-AC87-8C8D-5754-BF882F72063B';
    static VERSION:string = '18.0.0';
    static SKU_B:string = 'FFT19';
    static GAME_SKU:string = 'FFA19PS4';
    static CLIENT_HEADERS:any = {
        'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
        'Accept' :'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Encoding': 'gzip,deflate,sdch, br',
        'Accept-Language': 'en-US,en;q=0.8',
        'DNT' : '1'
    }

    constructor(private readonly httpService: HttpService) {

    }

    async login(): Promise<any>{
        let headers = FutApiService.CLIENT_HEADERS;
        headers.Referrer = 'https://www.easports.com/fifa/ultimate-team/web-app/';
        let config = {
            headers:headers,
            params: {
                prompt : 'login',
                accessToken : '',
                client_id : FutApiService.CLIENT_ID,
                response_type : 'token',
                display : 'web2/login',
                locale : 'en_US',
                redirect_uri: 'https://www.easports.com/fifa/ultimate-team/web-app/auth.html',
                scope : 'basic.identity offline signin'
            }
        };
        let resp = this.httpService.get('https://accounts.ea.com/connect/auth',config).toPromise().then(value => {
            console.log(value);
        });
        console.log(resp);
        return resp.data;
    }

}
