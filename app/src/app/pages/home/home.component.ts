import {Component, HostListener, OnInit} from '@angular/core';
import {GlobalService} from "../../services/global.service";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  @HostListener('window:scroll', ['$event'])
  scrollFunction() {
    this.showScrollToTop = (document.getElementsByTagName('html')[0] as HTMLElement).scrollTop > 20;
  }
  posts: Post[] = [];
  showScrollToTop = false;
  page = 1;
  infinityScroll = {
    isLoading: true,
    canLoad: true
  }
  constructor(
    private globalService: GlobalService
  ) {}
  onScroll() {
    if (this.infinityScroll.canLoad) {
      this.page++;
      this.infinityScroll.isLoading = true;
      this.globalService.getPosts(this.page).subscribe((data: any) => {
        if (data.length === 0) {
          this.infinityScroll.canLoad = false;
          this.infinityScroll.isLoading = false;
        }else{
          this.posts = this.posts.concat(data);
        }
      });
    }
  }

  scrollToTop(){
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }


  ngOnInit() {
    this.globalService.getPosts(this.page).subscribe((data: any) => {
      this.posts = data;
      console.log(this.posts);
    });
  }

}
