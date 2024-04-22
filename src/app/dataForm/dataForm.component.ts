import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../types/Item";

@Component({
  selector: 'data-form',
  templateUrl: './dataForm.component.html',
  styleUrls: ['./dataForm.component.scss']
})

export class DataForm implements OnInit {
  @Output() onItemAdded: EventEmitter<Item> = new EventEmitter<Item>();

  item: Item = {
    name: '',
    genre: '',
    creator: '',
    type: '',
    totalTime:undefined
  };

  ngOnInit() {

  }
  addItem() {
    this.onItemAdded.emit(this.item);
  
    this.item = {
      name: '',
      genre: '',
      creator: '',
      type: '',
      totalTime:undefined
    };
  }

}
