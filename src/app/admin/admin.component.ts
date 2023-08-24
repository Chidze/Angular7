import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/services/blog.service';
import { IBlogResponse } from '../shared/interfaces/blog.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public image = '../../assets/AdobeStock_181851142.jpeg';
  public author = '';
  public title = '';
  public text = '';
  public id !: number;
  public blogs!: IBlogResponse[];
  public editID!: number;
  public save = false;

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getAll().subscribe((data) => { this.blogs = data });
  }

  addBlog(): void {
    const newBlog = {
      image: this.image,
      author: this.author,
      title: this.title,
      text: this.text
    }
    this.blogService.create(newBlog).subscribe(() => { this.getBlogs() });
    this.resetForm();
    console.log(this.blogs)
  }

  deleteBlog(blog:IBlogResponse):void {
    this.blogService.delete(blog.id).subscribe(()=> {
      this.getBlogs();
    })
  }

  resetForm():void {
      this.title = '';
      this.text = '';
      this.author = '';
  }

  editBlog(blog: IBlogResponse): void {
    this.title = blog.title;
    this.text = blog.text;
    this.author = blog.author;
    this.editID = blog.id;
    this.save = true;
  }
  saveEdit():void {
    const updateBlog = {
      image: this.image,
      author: this.author,
      title: this.title,
      text: this.text
    };
    this.blogService.update(updateBlog, this.editID).subscribe(()=>{this.getBlogs()})
    this.resetForm();
    this.save = false;
  }
}
