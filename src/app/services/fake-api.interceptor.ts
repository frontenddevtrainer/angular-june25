import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class FakeApiInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const { url, method, body } = request

    function ok(body: any) {
      return of(new HttpResponse({ status: 200, body }))
    }

    function matchURL() {
      if (url.endsWith("/top-news")) {
        return ok([{
          "id": "ff848d62-6b28-475a-94d7-efe927567118",
          "title": "Fake API Article",
          "content": "vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis",
          "author": {
            "name": "Livia Longworthy",
            "profilePic": "https://robohash.org/quibusdamabofficia.png?size=50x50&set=set1",
            "email": "llongworthy1@constantcontact.com"
          },
          "likes": 749,
          "publishedOn": "2021-12-18T04:28:46Z",
          "image": {
            "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
            "banner": "http://dummyimage.com/800x300.png/5fa2dd/ffffff"
          },
          "isTopNEWS": true,
          "category": "Entertainment"
        }])
      }
      return next.handle(request);
    }

    return of(undefined)
      .pipe(mergeMap(matchURL))

  }
}
