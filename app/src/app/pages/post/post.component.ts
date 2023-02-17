import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../services/global.service";
import {Post} from "../../models/Post";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;
  constructor(
    private globalService: GlobalService,
    private route: ActivatedRoute
  ) { }
  href: string;
  ngOnInit() {
    this.href = new URL(window.location.href).href;
    this.route.params.subscribe((params: any) => {
      this.globalService.getPost(params.slug).subscribe((post: Post) => {
        this.post = post;
      });
    });
  }


}
