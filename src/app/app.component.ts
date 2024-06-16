import {Component, OnInit} from '@angular/core';
import {App} from "./app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sandbox-jointjs-imageprocessor';

  ngOnInit(): void {
    let app = new App();
  }
}
