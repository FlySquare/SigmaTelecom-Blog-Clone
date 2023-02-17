export class Post{
  images?: {low?: string, high?: string}[];
  image?: {low: string, high: string};
  sharedAt: string;
  timeToRead: string;
  title:string;
  description:string;
  viewCount?:string;
  commentCount?:string;
  likeCount?:string;
  realUrl?: string;
  slug?: string;

  prepare(input?: any){
    Object.assign(this, input);
    if (input.timeToRead){
      this.timeToRead = input.timeToRead.split(' ')[0] + ' dk';
    }
    return this;
  }
}
