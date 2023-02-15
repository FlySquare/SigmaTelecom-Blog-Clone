import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../services/global.service";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  posts: Post[] = [];
  page = 1;
  constructor(
    private globalService: GlobalService
  ) {}

  ngOnInit() {
    this.globalService.getPosts(this.page).subscribe((data: any) => {
      this.posts = data;
      console.log(this.posts);
    });
  }

}
