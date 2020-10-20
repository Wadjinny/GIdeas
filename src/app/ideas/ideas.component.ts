import { Component, OnInit } from '@angular/core';
import {idea} from '../models/idea.model';
import {IdeasService} from '../services/ideas.service';
@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {
  
  idea1:idea;
  constructor(private ideasService : IdeasService) {
    this.idea1=ideasService.getIdeas();
   }
  ngOnInit(): void {
  }
}
