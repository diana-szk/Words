import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Task2Component } from './tasks/task2/task2.component';
import { Task3Component } from './tasks/task3/task3.component';
import { WordsService } from './words.service';
import { Task1Component } from './tasks/task1/task1.component';
import { CountComponent } from './counter/count/count.component';

@NgModule({
  declarations: [
    AppComponent,
    Task2Component,
    Task3Component,
    Task1Component,
    CountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
