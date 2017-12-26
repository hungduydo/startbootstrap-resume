/**
 * Created by haole on 6/8/17.
 */
import { Routes } from '@angular/router';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { CurrencyConvertComponent } from './currency-convert/currency-convert.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'resume', pathMatch: 'full' },
    { path: 'resume', component: ResumeComponent },
    { path: 'exchange', component: ExchangeComponent },
    { path: 'convert', component: CurrencyConvertComponent },
    {path: '**', redirectTo: '/home'}
];
