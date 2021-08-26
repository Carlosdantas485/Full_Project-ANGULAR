import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
  	ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe
  ],
  exports: [
  	ConversorComponent
  ],
  providers: [
  	MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
