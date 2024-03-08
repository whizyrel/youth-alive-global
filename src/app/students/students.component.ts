import { Component } from '@angular/core';
import { Campus, CampusService } from '../services/campus.service';
import { Image } from '../gallery/gallery.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  public universitiesCount: number = 77;
  public polytechnicsCount: number = 43;
  public collegesOfEducationCount: number = 31;
  public campuses: Campus[] = [];
  public endOfList: boolean = false;
  public images: Image[] = Array.from({ length: 30 }, (_, i) => ({
    src: `https://storage.googleapis.com/yaf-test.appspot.com/campus/campus-image-${
      i + 1
    }.jpeg`,
  }));

  // dd49024f4d4c1b0aad89ddfe63000bb7;
  // 437585e8d7ab8469
  constructor(private readonly campusService: CampusService) {}

  ngOnInit() {
    this.getCampuses();
  }

  public getCampuses() {
    this.campusService.getCampuses(30, this.campuses.length).subscribe({
      next: (campuses) => {
        this.campuses.push(...campuses);

        if (campuses.length === 0) {
          this.endOfList = true;
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
