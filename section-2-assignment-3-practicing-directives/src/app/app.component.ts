import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'section-2-assignment-3-practicing-directives';

  showSecret = false;

  log = [];

  toggleParagraphVisible() {
    this.showSecret = !this.showSecret;
  }

  toggleSecret() {
    this.showSecret = !this.showSecret;
    // NOTE: This is a revision as per the '43. Getting the Index when using ngFor' lesson to use Date timestamps instead of just adding the .length property:
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
