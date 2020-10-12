import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() movies:Array<Object> ;
  imgRoot="https://image.tmdb.org/t/p/w200";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getMovieDetails(id:number){

    console.log(id);
    this.router.navigate(['/movie',id])
    
  }
}
