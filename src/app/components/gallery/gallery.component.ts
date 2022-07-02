import { Component, OnInit } from '@angular/core';
import { GalleryImage } from 'src/interfaces/galleryimage';

@Component({
  selector: 'edureka-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public galleryImage: GalleryImage = {
    heading: "Gallery Image Heading",
    subHeading: "Gallery Sub Heading",
    imageUrl: "http://dummyimage.com/800x300.png/cc0000/ffffff",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
