import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ExchangeService {
    private http;
    constructor(http: Http) {
        this.http = http;
    }

    getCurrencyRate() {
        return this.http.get(`http://www.vietcombank.com.vn/ExchangeRates/ExrateXML.aspx`)
            .map((res: Response) => {
                console.log(res);
            });
    }
}
