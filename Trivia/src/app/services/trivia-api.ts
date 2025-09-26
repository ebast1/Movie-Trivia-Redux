import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { GameDataService } from './game-data-service';

@Injectable({
  providedIn: 'root'
})

export class TriviaApi {
  private apiUrl    : string = environment.tmdbApiUrl;
  private apiKey    : string = environment.tmdbApiKey;
  private apiToken  : string = environment.tmdbReadAccessToken;

  constructor(private http: HttpClient, private gameData: GameDataService) {}

  // ----------------------------------------------------------------------------------
  //    Old methods using OMDB API
  //  --------------------------------------------------------------------------

  async searchMovie(title: string) : Promise<any[]> { 
    const result = await lastValueFrom(this.http.get<any[]>(this.apiUrl + this.apiKey + 't={title}'.replace('{title}', title)));
    console.log(result);
    return result;
  }

  async getMovieById(id: string) : Promise<any> {
    const result = await lastValueFrom(this.http.get<any>(this.apiUrl + '?apikey=' + this.apiKey + '&' + 'i={id}'.replace('{id}', id)));
    console.log(result);
    return result;
  }
  
  //  --------------------------------------------------------------------------
  //    New methods using TMDB API
  //  -----------------------------------------------------------------------

  getMovieByTitle(title: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiToken}`
    });

    const params = new HttpParams().set('query', title);

    return this.http.get(`${this.apiUrl}/search/movie`, { headers, params });

  }

  getMovieByGenre(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiToken}`
    });

    const params = new HttpParams().set('with_genres', 
      this.gameData.getSelectedGenres().join(',%20')
    );

    return this.http.get(`${this.apiUrl}/discover/movie`, { headers, params });
  }

  // https://api.themoviedb.org/3/discover/movie ?api_key=6d69d7335f0f20aed2c570430e5721e6 & with_genres=28,%2012
  // After every genre add a comma and %20

}
