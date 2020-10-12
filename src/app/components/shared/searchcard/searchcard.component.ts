import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchcard',
  templateUrl: './searchcard.component.html',
  styleUrls: ['./searchcard.component.css']
})
export class SearchcardComponent implements OnInit {

  @Input() movies;
  imgRoot="https://image.tmdb.org/t/p/w500";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getMovieDetails(id:number){
    this.router.navigate(['/movie',id])
  }
}
