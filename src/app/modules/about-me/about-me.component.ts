import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data-service.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  providers: [DataService]
})
export class AboutMeComponent implements OnInit {
  data: any[] | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getWorks()
      .subscribe((data: any[]) => {
        this.data = data;
      });
  }

}
