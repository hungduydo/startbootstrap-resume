import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ExchangeService {
    private http;
    constructor(http: Http) {
        this.http = http;
    }

    getCurrencyRate() {
        const promise = new Promise((reslove, reject) => {
            this.http.get(`http://www.vietcombank.com.vn/ExchangeRates/ExrateXML.aspx`)
            .map((res: Response) => {
                console.log(res);
            });
        });

        return promise;

    }
}
