import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { AutoCadastroService } from './services';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AutocadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  exports: [
    AutocadastroComponent
  ],
  providers: [
    AutoCadastroService,
    provideNgxMask()
  ]
})
export class AutocadastroModule { }
