import { Component, OnInit } from '@angular/core';
import { WordsService } from 'src/app/words.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss'],
})
export class Task1Component implements OnInit {
  words: string[] = [];

  constructor(private wordService: WordsService) {}

  ngOnInit(): void {
    this.wordService.getWords().subscribe((words) => (this.words = words));
  }

  getLetters(): string[][] {
    const letters = this.words.map((word: string) => word.split(''));
    return letters;
  }

  applyCount(n: number) {
    console.log(n);
  }
}
