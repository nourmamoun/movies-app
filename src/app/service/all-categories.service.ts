import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { All } from '../interfaces/all';
import { api_key} from '../constantData'
@Injectable({
  providedIn: 'root'
})
export class AllCategoriesService {
  //api_key="Your own API Key"

  // Base URL for the API
  base_url="https://api.themoviedb.org/3/trending"

  constructor(private _httpClient:HttpClient) {}

  // All Trending Categories
  getAllCategories(): Observable<any>{
    return this._httpClient.get(`${this.base_url}/all/day?api_key=${api_key}`)
  }

  // All Trending Movies
  getAllMovies(): Observable<any>{
    return this._httpClient.get(`${this.base_url}/movie/day?api_key=${api_key}`)
  }

  // All Trending TV Shows
  getAllTv(): Observable<any>{
    return this._httpClient.get(`${this.base_url}/tv/day?api_key=${api_key}`)
  }

  // All Trending People
  getAllPeople(): Observable<any>{
    return this._httpClient.get(`${this.base_url}/person/day?api_key=${api_key}`)
  }

  // Movies by ID
  getMovieById(id: number): Observable<All> {
    return this._httpClient.get<All>(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`);
  }
  
  // Tv shows by ID
  getTvById(id: number): Observable<All> {
    return this._httpClient.get<All>(`https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`);
  }
}
