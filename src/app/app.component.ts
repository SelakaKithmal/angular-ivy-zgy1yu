import { Component, OnInit, VERSION } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public randomValue: any;
  name = 'Angular ' + VERSION.major;
  public movies: any = [
    { id: '1', category: 'comedy', content: 'Millers' },
    { id: '2', category: 'horror', content: 'Sinister' }
  ];

  constructor(private AppService: AppService) {}

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    let ran = Math.floor(Math.random() * (2 - 0) + 0);
    this.randomValue = this.movies[ran];
    console.log(ran);
    console.log(this.movies[ran]);
  }
}
