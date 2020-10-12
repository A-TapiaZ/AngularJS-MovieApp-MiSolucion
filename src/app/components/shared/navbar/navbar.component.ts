import { Component, OnInit } from '@angular/core';
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

    // TODO: Llevarlo a un pipe(?)
    let list: Array<string> = [];

    list=termino.split(' ');
    console.log(termino.split(' '));
    console.log(list.join('%20'));

    this.moviesService.updateBusquedaNav(list.join('%20'));
    this.router.navigate(['/search']);
  }

}
