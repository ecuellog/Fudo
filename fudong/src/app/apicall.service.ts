import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

@Injectable()
export class ApicallService {

  constructor(private http: HttpClient) {}

  sendPost(path, params){
  	var headers = new HttpHeaders();
  	headers = headers.set('Content-Type','application/json');
  	params = JSON.stringify(params);
  	return this.http.post('http://localhost:3001' + path, params, {
  		headers: headers
  	});
  }

  register(params){
  	return this.sendPost('/user/register', params);
  }

  login(params){
  	return this.sendPost('/user/login', params);
  }
}
