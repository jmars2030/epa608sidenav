import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {


  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }

    //bug sim: Next line is a simulated bug to show the expand and collapse feater misbehaving 
    // the lhs nav section expands and hides the content when the logo "A" button is clicked.
    // Note: I think many viewes including me missed this since the video passed this section quicker.
    // To fix replace this line with: return styleClass;
    return styleClass;
  }

}
