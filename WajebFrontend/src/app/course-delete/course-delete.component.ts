import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../_services/courses.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrls: ['./course-delete.component.css']
})
export class CourseDeleteComponent implements OnInit {

  constructor(private courseService: CoursesService, private router:Router, private route: ActivatedRoute, private token: TokenStorageService) { }
  courseId: any;

  ngOnInit(): void {
  }

  deleteCourse(): void {
    this.route.queryParams.subscribe(
      params => this.courseId = (params['courseId']));
    this.courseService.deleteCourse(this.token.getToken(), this.courseId).subscribe(
      data => {this.router.navigate(["/teacher"]);
    },
    err => {
      console.log(err);
    }
    );
  }

}
