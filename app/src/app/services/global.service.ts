import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {map, Observable} from "rxjs";
import {Post} from "../models/Post";
import {Response} from "../models/Response";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private apiService: ApiService,
  ) {}

  getPosts(page: number): Observable<Post[]> {
    return this.apiService.get('posts/page/' + page).pipe(
      map((response: Response) => response.data.map((post: any) => new Post().prepare(post)))
      );
  }

  getPost(slug: number): Observable<Post> {
    return this.apiService.get('post/' + slug).pipe(
      map((response: Response) => new Post().prepare(response.data))
    );
  }
}
