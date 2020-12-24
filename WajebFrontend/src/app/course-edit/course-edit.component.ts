import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, CoursesService } from '../_services/courses.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  constructor(private courseService: CoursesService, private router:Router, private route: ActivatedRoute, private token: TokenStorageService) { }

  courseId: any;
  course: Course;
  @Input() courseData = { courseName: '' };


  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => this.courseId = (params['courseId']));
      this.courseService.editCourseGet(this.token.getToken(), this.courseId).subscribe(
        data => {
          this.course=data;
          this.courseData.courseName = this.course.courseName;
      },
      err => {
        console.log(err);
      }
      );
  }

  editCourse(): void{
    this.courseService.editCoursePost(this.token.getToken(), this.courseId, this.courseData.courseName ).subscribe(
      data => {
        this.router.navigate(['/teacher']);
      },
      err => {
        console.log(err);
      }
     );
  }
  }

