import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
  @Input() totalCount: number;      //Input property is something that we receive from parent component
  @Input() pageSize: number;
  @Input() pageNumber: number;
  @Output() pageChanged = new EventEmitter<number>();   //Output property is a way that child component outputd data to parent component

  constructor() { }

  ngOnInit(): void {
  }

  onPagerChange(event: any){
      this.pageChanged.emit(event.page)
  }
}
