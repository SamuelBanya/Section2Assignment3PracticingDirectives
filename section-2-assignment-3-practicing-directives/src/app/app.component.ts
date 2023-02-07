import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'section-2-assignment-3-practicing-directives';

  showSecret = false;

  clicksArray = [];

  toggleParagraphVisible() {
    this.showSecret = !this.showSecret;
  }

  toggleSecret() {
    this.showSecret = !this.showSecret;
  }
}
