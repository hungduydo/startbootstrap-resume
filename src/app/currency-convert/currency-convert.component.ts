import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../services/index';

@Component({
    selector: 'app-currency-convert',
    templateUrl: './currency-convert.component.html',
    styleUrls: ['./currency-convert.component.scss']
})
export class CurrencyConvertComponent implements OnInit {
    public inputVND;
    public inputUSD;
    constructor(private exchangeService: ExchangeService) { }

    ngOnInit() {
        this.exchangeService.getCurrencyRate().then(rs => {
            console.log(rs);
        });
    }

}
