import { Injectable } from '@angular/core';
import { IBlogRequest, IBlogResponse } from '../interfaces/blog.interface';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private url = environment.BACKEND_URL;
  private api = { blog: `${this.url}/blog`};
  
  constructor(
    private http: HttpClient
  ){}

  getAll(): Observable<IBlogResponse[]> {
    return this.http.get<IBlogResponse[]>(this.api.blog);
  }
  create(blog : IBlogRequest): Observable<IBlogResponse> {
    return this.http.post<IBlogResponse>(this.api.blog, blog);
  }
  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.api.blog}/${id}`)
  }
  update(blog:IBlogRequest, id:number): Observable<IBlogResponse> {
    return this.http.patch<IBlogResponse>(`${this.api.blog}/${id}`, blog)
  }
}
