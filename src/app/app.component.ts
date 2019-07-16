import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
@ViewChild('refpara') paragraph : ElementRef

onFirstClick(paragraph:HTMLInputElement) {
  console.log(this.paragraph)

}

onSecondClick(e : Event) {
  console.log(e)
  console.log(e.target)   // we always focus on target for any event payload object because it contains sufficient info
}

}
