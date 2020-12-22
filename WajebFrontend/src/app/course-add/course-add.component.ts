import { Component, Input, OnInit } from '@angular/core';
import {CoursesService} from '../_services/courses.service';
import {Router} from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';


@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  currentUser: any;
  @Input() courseData = { courseName: '', userId: '' };

  constructor(private courseService: CoursesService, private router:Router, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  addCourse(): void{
     
     this.courseService.addCourse(this.courseData.courseName ).subscribe(
      data => {
        this.router.navigate(['/teacher']);
      },
      err => {
        console.log(err);
      }
     );
  }

}
