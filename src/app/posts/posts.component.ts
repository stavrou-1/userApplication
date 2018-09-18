import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostComponent implements OnInit {

  posts: Object;

  constructor(private data: DataService) {

  }

  // like component will mount :)
  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts = data;
    )
  }

}