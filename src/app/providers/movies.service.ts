import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  rootURL ="https://api.themoviedb.org/3";
  api_key ='4c66a2cab00463a7378fda61d11c4c71';
  busquedaNavBar:string=null;



  constructor(private http:HttpClient) { }

  getNowPlyingMovies(){

    return this.http.get(`${this.rootURL}/movie/now_playing?api_key=${this.api_key}&language=en-US&page=1`);
  }

  getPopularMovies(){
    return this.http.get(`${this.rootURL}/movie/popular?api_key=${this.api_key}&language=en-US&page=1`);
  }
  
  getChildrenMovies(){
    return this.http.get(`${this.rootURL}/discover/movie?api_key=${this.api_key}&certification_country=US&certification.lte=G&sort_by=popularity.desc`);
  }
  
  getMovieDetails(id:string){
    return this.http.get(`${this.rootURL}/movie/${id}?api_key=${this.api_key}`)
  }

  searchMovie(busqueda:string){
    return this.http.get(`${this.rootURL}/search/movie?api_key=${this.api_key}&language=es-ES&query=${busqueda}&page=1&include_adult=false`)
  }

  updateBusquedaNav(busqueda:string){
    this.busquedaNavBar=busqueda;
  }

  BusquedaNav(){
    return this.busquedaNavBar;
  }
}

