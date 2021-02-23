import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent implements OnInit {
  //send data to parent component
  @Output() applyCount: EventEmitter<number> = new EventEmitter();

  // inputValue: number;

  constructor() {}

  ngOnInit(): void {}

  onChange(event: any) {
    event.stopPropagation();
    const inputValue: number = event.target.value;
    if (inputValue > 0)
      //  console.log(inputValue);

      this.applyCount.emit(inputValue);
  }
}
