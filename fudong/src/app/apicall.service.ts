import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

@Injectable()
export class ApicallService {

  constructor(private http: HttpClient) {}

  register(params){
  	var headers = new HttpHeaders();
  	headers = headers.set('Content-Type','application/json');
  	params = JSON.stringify(params);
  	console.log(headers);
  	return this.http.post('http://localhost:3001/user/register', params, {
  		headers: headers
  	})
  }
}
