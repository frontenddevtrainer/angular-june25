export interface Article {
    "id": string,
    "title"?: string,
    "content": string,
    "author": {
        "name": string,
        "profilePic": string,
        "email": string
    },
    "likes": number,
    "publishedOn": string,
    "image": {
        "thumbnail": string,
        "banner": string
    },
    "isTopNEWS"?: boolean,
    "category": string
}