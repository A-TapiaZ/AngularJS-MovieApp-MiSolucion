import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from '../../../providers/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private moviesService:MoviesService) { }

  ngOnInit(): void {
  }

  search(termino:string){

    console.log(termino);
    
    if(termino.length===0){
      return;
    }

    this.router.navigate(['/search',termino]);
  }

}
