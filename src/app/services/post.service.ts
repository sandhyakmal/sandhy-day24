import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/i-post';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getAllPost(): IPost[] {
    let posts = [
      new Post(1, "Lorem" ,'lorem ipsum postingan ke-1', true),
      new Post(2, "Lorem" ,'lorem ipsum postingan ke-2', true),
      new Post(3, "Lorem" ,'lorem ipsum postingan ke-3', true),
      new Post(4, "Lorem" ,'lorem ipsum postingan ke-4', true),
    ];

    return posts;

  }
}
