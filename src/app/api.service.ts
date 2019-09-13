import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable ({
providedIn: 'root'
})
export class ApiService {
apiUrl = 'http://jsonplaceholder.typicode.com/users';
constructor(private  http: HttpClient) {}
getData() {
    this.http.get(this.apiUrl);
}
}
