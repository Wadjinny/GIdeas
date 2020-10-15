import { Component, Input, OnInit } from '@angular/core';
import { idea } from '../models/idea.model';



@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {
  @Input() ideaData:idea;
  constructor() {
    console.log(this.ideaData);
   }

  ngOnInit(): void {

  }

}
