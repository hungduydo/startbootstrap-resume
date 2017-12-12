import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { ExchangeService } from './services';
import { ResumeComponent } from './resume/resume.component';
import { CurrencyConvertComponent } from './currency-convert/currency-convert.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeComponent,
    ResumeComponent,
    CurrencyConvertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
