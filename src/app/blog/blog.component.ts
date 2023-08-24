import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/services/blog.service';
import { IBlogResponse } from '../shared/interfaces/blog.interface';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public blogs!: IBlogResponse[];
  public image = '../../assets/AdobeStock_181851142.jpeg'

  constructor(
    private blogService: BlogService
  ){}
  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getAll().subscribe((data) => { this.blogs = data });
  }
 
}
