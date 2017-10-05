import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdFormFieldModule, MdTableModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MdTableModule,
    MdFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: []
})
export class TorrentsModule { }
