import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {

  }

  getNews(category: string) : any {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
}
