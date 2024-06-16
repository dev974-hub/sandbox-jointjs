import {AfterViewInit, Component, OnInit} from '@angular/core';
import {App} from "./app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{

  title = 'sandbox-jointjs-imageprocessor';

  ngOnInit(): void {
    this.loadApp();
  }

  ngAfterViewInit(): void {

  }

  private loadApp() {

    let app = new App();
    // setTimeout(() => {
    //   let app = new App();
    // }, 1000);
  }
}
