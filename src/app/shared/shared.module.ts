import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { StringDirective } from './directives/string.directive';
import { AlphanumericDirective } from './directives/alphanumeric.directive';
import { UpperCaseDirective } from './directives/upper-case.directive';
import { IntegerDirective } from './directives/integer.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    StringDirective,
    AlphanumericDirective,
    UpperCaseDirective,
    IntegerDirective
  ],
  exports: [
    StringDirective,
    AlphanumericDirective,
    UpperCaseDirective,
    IntegerDirective,
    CommonModule,
    HttpModule
  ]
})
export class SharedModule { }
