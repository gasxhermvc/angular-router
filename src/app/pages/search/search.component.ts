import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { SearchService, SearchModel } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchData: any;
  searchForm: FormGroup;
  codec: any = new HttpUrlEncodingCodec();

  searchText: string = '';
  types: any;
  levels: any;
  functions: any;

  get paging() {
    return [...new Array(10)].map((item: any, index: number) => index + 1);
  }
  constructor(
    private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private search: SearchService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    (window as any).search = this;
    this.searchForm = this.formBuilder.group({
      q: new FormControl(''),
      type: new FormControl([]),
      level: new FormControl([]),
      func: new FormControl([]),
      page: new FormControl(1),
    });
    this.ngZone.run(async () => {
      const query: SearchModel = this.route.snapshot.queryParams;
      this.searchText = query.q || '';
      this.searchForm.patchValue({
        ...query,
        q: query.q || '',
        type:
          query.type && query.type.length > 0
            ? query.type instanceof Array
              ? query.type
              : (query.type as any).split(',')
            : [],
        level:
          query.level && query.level.length > 0
            ? query.level instanceof Array
              ? query.level
              : (query.level as any).split(',')
            : [],
        func:
          query.func && query.func.length > 0
            ? query.func instanceof Array
              ? query.func
              : (query.func as any).split(',')
            : [],
        page: query.page || 1,
      });
    });
  }

  async ngOnInit(): Promise<void> {
    this.searchData = await this.search
      .getSearch(this.searchForm.getRawValue())
      .toPromise();
    this.types = await this.search.getJobTypes().toPromise();
    this.levels = await this.search.getLevels().toPromise();
    this.functions = await this.search.getFunctions().toPromise();

    this.ngZone.runOutsideAngular(() => {
      this.types = [].concat(
        ...this.types.map((item: any) => {
          return {
            ...item,
            checked: this.route.snapshot.queryParamMap
              .get('type')
              ?.includes(item.CODE),
          };
        })
      );
      this.levels = [].concat(
        ...this.levels.map((item: any) => {
          return {
            ...item,
            checked: this.route.snapshot.queryParamMap
              .get('level')
              ?.includes(item.CODE),
          };
        })
      );
      this.functions = [].concat(
        ...this.functions.map((item: any) => {
          return {
            ...item,
            checked: this.route.snapshot.queryParamMap
              .get('func')
              ?.includes(item.CODE),
          };
        })
      );
    });
  }

  ngOnDestroy() {
    console.log('search.destroy');
  }
  getImage(img: any) {
    return img.replace('_-x__', '56x56');
  }

  getTags(tags: any) {
    if (!tags) return '';

    return tags.map((m: any) => '#' + m).join(' ');
  }

  onChange(evt: any) {
    this.searchForm.patchValue({
      q: evt.target.value,
    });
  }

  onCheckType(evt: any) {
    const oldValue = this.searchForm.getRawValue()['type'];

    if (evt && evt.target.checked) {
      this.searchForm.patchValue({
        type: [...oldValue].concat(...[evt.target.value]),
      });
    } else {
      this.searchForm.patchValue({
        type: oldValue.filter((item: any) => item !== evt.target.value),
      });
    }
    this.ngZone.run(() =>
      this.router.navigate(['/search'], {
        queryParams: {
          type: this.searchForm.getRawValue()['type'].join(','),
        },
        queryParamsHandling: 'merge',
      })
    );
  }

  onCheckLevel(evt: any) {
    const oldValue = this.searchForm.getRawValue()['level'];

    if (evt && evt.target.checked) {
      this.searchForm.patchValue({
        level: [...oldValue].concat(...[evt.target.value]),
      });
    } else {
      this.searchForm.patchValue({
        level: oldValue.filter((item: any) => item !== evt.target.value),
      });
    }

    this.ngZone.run(() =>
      this.router.navigate(['/search'], {
        queryParams: {
          level: this.searchForm.getRawValue()['level'].join(','),
        },
        queryParamsHandling: 'merge',
      })
    );
  }

  onCheckFunction(evt: any) {
    const oldValue = this.searchForm.getRawValue()['func'];

    if (evt && evt.target.checked) {
      this.searchForm.patchValue({
        func: [...oldValue].concat(...[evt.target.value]),
      });
    } else {
      this.searchForm.patchValue({
        func: oldValue.filter((item: any) => item !== evt.target.value),
      });
    }

    this.ngZone.run(() =>
      this.router.navigate(['/search'], {
        queryParams: {
          func: this.searchForm.getRawValue()['func'].join(','),
        },
        queryParamsHandling: 'merge',
      })
    );
  }

  onSearch(evt: any) {
    const params: SearchModel = this.searchForm.getRawValue();
    this.router
      .navigate(['/search'], {
        queryParams: params,
        queryParamsHandling: 'merge',
      })
      .then(async () => {
        this.searchData = await this.search.getSearch(params).toPromise();
      });
  }

  pageChange(page: number) {
    this.searchForm.patchValue({
      page: page,
    });
    const params: SearchModel = this.searchForm.getRawValue();
    this.router
      .navigate(['/search'], {
        queryParams: params,
        queryParamsHandling: 'merge',
      })
      .then(async () => {
        this.searchData = await this.search.getSearch(params).toPromise();
      });
  }
}
