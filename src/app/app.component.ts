import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheaters = [
      { title: 'Spiderman', releaseDate: new Date(), price: 50 },
      { title: 'Spiderwomen', releaseDate: new Date(-1), price: 50 },
    ];
    this.moviesFutureReleases = [];
  }
  moviesInTheaters: any;
  moviesFutureReleases: any;
}
