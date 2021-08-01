import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-layout',
  templateUrl: './job-layout.component.html',
  styleUrls: ['./job-layout.component.scss'],
})
export class JobLayoutComponent implements OnInit {
  get path(): any {
    return this.route.snapshot.url && this.route.snapshot.url[0]
      ? this.route.snapshot.url[0].path
      : '';
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ngZone: NgZone
  ) {
    console.log(this.route.snapshot.url, this.router);
  }

  ngOnInit(): void {}

  redirect(url: string) {
    this.ngZone.run(() => {
      if (url === '/' || url === '') {
        this.router.navigate([url], { skipLocationChange: false });
      } else {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            url !== '/' && this.router.navigate([url]);
          });
      }
    });
  }
}
