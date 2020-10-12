import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../providers/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  busqueda:string=null;
  movies: object[]=[];

  constructor(private moviesService:MoviesService) {

    this.busqueda=this.moviesService.BusquedaNav();

    if (this.busqueda) {
      this.searchFunction(this.busqueda);
    }
  }

  ngOnInit(): void {
  }

  searchFunction(terms:string){

    this.moviesService.searchMovie(terms).subscribe(resp => {
      this.movies=resp['results'];
    })
  }


}
