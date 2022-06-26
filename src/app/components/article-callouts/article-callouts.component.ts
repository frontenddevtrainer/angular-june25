import { Component, OnInit } from '@angular/core';


const topNews = [
  {
    "id": "ff848d62-6b28-475a-94d7-efe927567118",
    "title": "monitoring",
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
  },
  {
    "id": "f1854e38-2365-4605-a1bc-cd40ecebdc03",
    "title": "bi-directional",
    "content": "venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet",
    "author": {
      "name": "Brear Davie",
      "profilePic": "https://robohash.org/estetquasi.png?size=50x50&set=set1",
      "email": "bdavie2@cbc.ca"
    },
    "likes": 13,
    "publishedOn": "2022-03-01T13:40:32Z",
    "image": {
      "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "banner": "http://dummyimage.com/800x300.png/cc0000/ffffff"
    },
    "isTopNEWS": true,
    "category": "Entertainment"
  },
  {
    "id": "10406532-ad4e-415a-94d5-af687d417e73",
    "title": "didactic",
    "content": "dapibus duis at velit eu est congue elementum in hac",
    "author": {
      "name": "Falkner Banfield",
      "profilePic": "https://robohash.org/assumendaoccaecatisint.png?size=50x50&set=set1",
      "email": "fbanfield3@businessweek.com"
    },
    "likes": 722,
    "publishedOn": "2021-09-12T07:59:25Z",
    "image": {
      "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
      "banner": "http://dummyimage.com/800x300.png/ff4444/ffffff"
    },
    "isTopNEWS": true,
    "category": "International"
  },
  {
    "id": "238662a0-f902-429f-8269-9e5482417af2",
    "title": "Multi-lateral",
    "content": "vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus",
    "author": {
      "name": "Hobard Conechie",
      "profilePic": "https://robohash.org/explicaboquiain.png?size=50x50&set=set1",
      "email": "hconechie4@wunderground.com"
    },
    "likes": 237,
    "publishedOn": "2022-04-28T14:58:00Z",
    "image": {
      "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "banner": "http://dummyimage.com/800x300.png/cc0000/ffffff"
    },
    "isTopNEWS": true,
    "category": "Entertainment"
  }
]



@Component({
  selector: 'edureka-article-callouts',
  templateUrl: './article-callouts.component.html',
  styleUrls: ['./article-callouts.component.css']
})
export class ArticleCalloutsComponent implements OnInit {

  public news = topNews;

  constructor() { }

  ngOnInit(): void {
  }

}
