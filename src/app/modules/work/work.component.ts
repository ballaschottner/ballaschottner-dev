import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../services/data-service.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  work: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    const id: number = this.route.snapshot.params.id;
    console.log(id);
    this.dataService.getData(id).subscribe(work => this.work = work);
  }

}
