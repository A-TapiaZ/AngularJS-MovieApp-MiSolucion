import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../providers/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularMovies: Array<string>=[];
  nowPlayingMovies: Array<string>=[];
  childrenMovies: Array<string>=[];
  imgRoot="https://image.tmdb.org/t/p/original";


  constructor(private moviesService:MoviesService) { 
    
    
    this.moviesService.getNowPlyingMovies().subscribe((resp:any)=>{
      this.nowPlayingMovies=resp.results;
      
    })
    
    this.moviesService.getPopularMovies().subscribe((resp:any)=>{
      this.popularMovies=resp.results;
    });
    
    this.moviesService.getChildrenMovies().subscribe((resp:any)=>{
      this.childrenMovies=resp.results;
      console.log(this.childrenMovies);
    });
  
  }

  ngOnInit(): void {
  }

}
