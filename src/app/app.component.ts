import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'memegen';
  lable1 = '';
  lable2 = '';
  lable1img ='';
  lable2img ='';
  change() {
   this.lable1img = this.lable1;
   this.lable2img = this.lable2;
   
  }
}
