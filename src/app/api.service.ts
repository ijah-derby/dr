import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '084442fd2f0f41a9b5e7884d481ebd04';


  constructor(private httpClient: HttpClient) { }



  getNews(){
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}');
  }
}