import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('company.destroy');
  }
}
