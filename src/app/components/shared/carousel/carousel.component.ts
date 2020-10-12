import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() nowPlayingMovies;
  @Input() imgRoot:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getMovieDetails(id:number){
    console.log(id);
    this.router.navigate(['/movie',id])
    
  }
}
