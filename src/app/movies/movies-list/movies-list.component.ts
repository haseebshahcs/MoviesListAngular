import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: any;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.movies = [
        { title: 'Spiderman', releaseDate: new Date(), price: 50 },
        { title: 'Spiderwomen', releaseDate: new Date(-1), price: 50 }
      ]
    }, 2000);

  }
}
