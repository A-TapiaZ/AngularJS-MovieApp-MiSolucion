import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../providers/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  // TODO:cambiar el formato?
  movieDetails:Object=null;
  movieID:string=' ';
  imgRoot="https://image.tmdb.org/t/p/w500";


  constructor(private moviesService:MoviesService, private route:ActivatedRoute,private _location:Location) { 

    this.route.params.subscribe(resp=> {
      
      if (resp["id"]!==undefined) {       
        this.moviesService.getMovieDetails(resp["id"]).subscribe(resp => {
          this.movieDetails= resp;
          console.log(resp);
        })
      }
    });
    
  }

  ngOnInit(): void {
  }

  backClicked(){
    this._location.back();
  }
}
