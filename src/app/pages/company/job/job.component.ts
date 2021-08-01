import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {
  query: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.query = this.route.snapshot.params;
  }
}
