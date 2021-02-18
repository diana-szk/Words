import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Task2Component } from './tasks/task2/task2.component';
import { Task3Component } from './tasks/task3/task3.component';
import { WordsService } from './words.service';

@NgModule({
  declarations: [
    AppComponent,
    Task2Component,
    Task3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [WordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
