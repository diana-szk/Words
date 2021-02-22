import { Component, OnInit } from '@angular/core';
import { WordsService } from 'src/app/words.service';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit {

  words: string[] = []

  constructor(private wordService: WordsService) { 
   }

  ngOnInit(): void {
    this.wordService.getWords().subscribe(words => this.words = words) ;
  }

  displayWords(): string[]{

    return this.words.map((word: string) => {
      const letters: string[] = word.split('');
      const allLetters: string[] = letters.map((letter, index) => {
        if(index % 2 ===0){
          return letter.toUpperCase()
        }else{
          return letter
        }
      })
      return allLetters.join('_');
    })
  }
  }

