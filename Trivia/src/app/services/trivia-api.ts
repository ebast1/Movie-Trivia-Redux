import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TriviaApi {
  // Base URL and API key from environment
  private apiUrl : string = environment.omdbApiUrl;
  private apiKey : string = environment.omdbApiKey;

  constructor(private http: HttpClient) {}

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
  
}
