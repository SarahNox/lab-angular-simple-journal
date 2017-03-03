import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}/journal`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/journal/${id}`)
      .map((res) => res.json());
  }

  edit(journal) {
    return this.http.put(`${this.BASE_URL}/journal/${journal.id}`, journal)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/journal/${id}`)
      .map((res) => res.json());
  }

  createJournal(journal: any) {
    let body = JSON.stringify(journal);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.BASE_URL}/journal`,body,options).subscribe((res => console.log('succes')));

  }

}
