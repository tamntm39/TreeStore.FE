import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderStatePipe } from './order-state.pipe';

@NgModule({
  declarations: [
    OrderStatePipe 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrderStatePipe   ]
})
export class PipesModule { }
