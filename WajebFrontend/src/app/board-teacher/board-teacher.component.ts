import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService, Course } from '../_services/courses.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-teacher',
  templateUrl: './board-teacher.component.html',
  styleUrls: ['./board-teacher.component.css']
})
export class BoardTeacherComponent implements OnInit {

  currentUser: any;
  content: string;
  courses: Course[] = [];

  constructor(private courseService: CoursesService, private token:TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.courseService.getTeacherCourses(1).subscribe(
      data => {
        this.courses = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  add(): void{
    this.router.navigate(['/course-add']);
  }

}
