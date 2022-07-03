import { Component } from '@angular/core';

@Component({
  selector: 'edureka-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toggle : boolean = true;

  title = 'EdurekaNews';

  toggleLifecycleComponent(){
    this.toggle = !this.toggle
  }

}
