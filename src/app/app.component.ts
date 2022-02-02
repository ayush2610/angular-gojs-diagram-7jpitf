import { Component } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new go.GraphLinksModel(
    [
      { key: 1, text: "Enterprise Co", color: "lightblue" },
    ],
    [
      { from: 1, to: 2 },
    ]);
}
