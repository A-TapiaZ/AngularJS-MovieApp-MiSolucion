import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../providers/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // busqueda:string=null;
  buscar:string='';
  movies: object[]=[];

  constructor(public moviesService:MoviesService, public router:ActivatedRoute, private route:Router) {
    // this.busqueda=this.moviesService.BusquedaNav();

    // if (this.busqueda) {
    //   this.searchFunction(this.busqueda);
    // }
    this.router.params.subscribe(resp=> {

      // por si le damos al home y volvemos a la pagina search
      if (resp["params"]) {
        this.searchFunction(resp["params"])
        this.buscar=resp["params"];
      }
    }) 

  }

  ngOnInit(): void {
  }

  searchFunction(terms:string){

    if(terms.length===0){
      return;
    }

    this.route.navigate(['/search',terms]);

    this.moviesService.searchMovie(terms).subscribe(resp => {
      this.movies=resp['results'];
    })
  }


}
