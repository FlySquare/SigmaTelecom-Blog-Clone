import request from "request";
import * as dotenv from 'dotenv'
const cheerio = require('cheerio');
import {Request, Response} from "express";
import {Post} from "../Models/Post";
dotenv.config();

export class Api{
    public static getPosts(req: Request, res: Response): any {
        request.get(process.env.BLOG_URL + req.params.id, (err, response, body) => {
            const jsonPosts = this.parsePosts(body);
            res.send(jsonPosts);
        });
    }

    public static getPost(req: Request, res: Response): any {
        request.get(process.env.POST_URL + req.params.shortCode, (err, response, body) => {
            const jsonPosts = this.parsePost(body);
            res.send(jsonPosts);
        });
    }

    private static parsePost(body: string): any {
        const $ = cheerio.load(body);
        const post: Post = new Post();
        if($('[data-hook="empty-states__title"]').length > 0) {
            return {
                error: true,
                message: 'Post not found!'
            }
        }
        post.sharedAt = $('[data-hook="time-ago"]').attr().title;
        post.timeToRead = $('[data-hook="time-to-read"]').attr().title;
        post.title = $('[data-hook="post-title"]').children(0).children(0).children(0).text();
        post.description = $('[data-hook="post-description"]').children(0).children(0).html();
        return {data:post.prepare(post)};
    }

    private static parsePosts(body: string): any {
        const $ = cheerio.load(body);
        const posts: Post[] = [];
        $('[data-hook="gallery-item-image-img"]').each(function(key: any,value: any) {
            posts.push(new Post().prepare({
                images: {
                    low : value.attribs.src,
                    high: value.attribs.src.split('/v1')[0]
                }
            }));
        });
        $('[data-hook="time-ago"]').each(function(key: any,value: any) {
            posts[key].sharedAt = value.attribs.title;
        });
        $('[data-hook="time-to-read"]').each(function(key: any,value: any) {
            posts[key].timeToRead = value.attribs.title;
        });
        $('[data-hook="post-title"]').each(function(key: any,value: any) {
            posts[key].title = value.children[0].children[0].data;
            posts[key].realUrl = value.parent.parent.attribs.href;
        });
        $('[data-hook="post-description"]').each(function(key: any,value: any) {
            posts[key].description = value.children[0].children[0].children[0].data;
        });
        $('[data-hook="view-count-compact"]').each(function(key: any,value: any) {
            posts[key].viewCount = value.children[1].children[0].data;
        });
        $('[data-hook="comment-count-compact"]').each(function(key: any,value: any) {
            posts[key].commentCount = value.children[1].children[0].data;
        });
        $('[data-hook="like-button-with-count__like-count"]').each(function(key: any,value: any) {
            posts[key].likeCount = value.children[0].children[0].data;
        });
        return {data: posts.map((post: Post) => post.prepare(post))};
    }

}