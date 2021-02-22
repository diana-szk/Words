import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onChange(event: any) {
    const inputValue = event.target.value;
    if (inputValue > 0) console.log(inputValue);
  }
}
