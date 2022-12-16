import { IPost } from "../interfaces/i-post";

export class Post implements IPost{
    id:number;
    title:string;
    body:string;
    isPublished:boolean;
    url:string;

    constructor(id:number, title:string, body:string, isPublished:boolean){
        this.id = id;
        this.title = title;
        this.body = body;
        this.isPublished = isPublished;
        this.url = "https://picsum.photos/id/237/200/300";

    }
}