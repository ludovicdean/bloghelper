import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../model/tag';
import { TagService } from '../tag.service';
import { CommonModule, AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tags-helper',
  imports: [AsyncPipe, NgFor, NgIf, CommonModule],
  templateUrl: './tags-helper.component.html',
  styleUrl: './tags-helper.component.css'
})
export class TagsHelperComponent {
tags$: Observable<Tag[]>;
sortedTags$: Observable<Tag[]>;

constructor(private tagService: TagService) {this.tags$ = this.tagService.getTagsData();}
}
