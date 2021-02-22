import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WordsService } from 'src/app/words.service';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss'],
})
export class Task2Component implements OnInit {
  words: string[] = [];

  subscription: Subscription = new Subscription();

  constructor(private wordService: WordsService) {}

  ngOnInit(): void {
    const dataStream = this.wordService.getWords();
    const keepWords = (words: string[]) => (this.words = words);
    const newSubscription: Subscription = dataStream.subscribe(keepWords);
    this.subscription.add(newSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  displayWords(): string[] {
    return this.words.map((word: string) => word.split('').join('_'));
  }
}
