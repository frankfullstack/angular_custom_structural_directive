import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FilterByDirective } from './directive/filter-by.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule],
  declarations: [AppComponent, HelloComponent, FilterByDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
