import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AllCategoriesService {

  api_key="6bb5be885844cab7f2d55b39f9048443"
  base_url="https://api.themoviedb.org/3/trending"
  constructor(private _httpClient:HttpClient) {}

  // All Trending Categories
  getAllCategories(): Observable<any>{
    return this._httpClient.get(`${this.base_url}/all/day?api_key=${this.api_key}`)
  }

  // All Trending Movies
  getAllMovies(): Observable<any>{
    return this._httpClient.get(`${this.base_url}/movie/day?api_key=${this.api_key}`)
  }

  // All Trending TV Shows
  getAllTv(): Observable<any>{
    return this._httpClient.get(`${this.base_url}/tv/day?api_key=${this.api_key}`)
  }

  // All Trending People
  getAllPeople(): Observable<any>{
    return this._httpClient.get(`${this.base_url}/person/day?api_key=${this.api_key}`)
  }
}
