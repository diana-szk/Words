import { Component, OnInit } from '@angular/core';
import { WordsService } from 'src/app/words.service';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {

  words: string[] = []

  constructor(private wordService: WordsService) { 
   }

  ngOnInit(): void {
    this.wordService.getWords().subscribe(words => this.words = words) ;
  }

  displayWords(): string[]{
    return this.words.map((word: string) => word.split('').join('_'))
  }

  }

