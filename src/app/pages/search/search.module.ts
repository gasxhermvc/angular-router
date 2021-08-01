import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchRoutingModule } from './search-routing.module';
import { SearchService } from 'src/app/services/search.service';
import { SearchComponent } from './search.component';
import { EncodeUrlPipe } from 'src/app/pipes/encode-url.pipe';

@NgModule({
  declarations: [SearchComponent, EncodeUrlPipe],
  exports: [SearchComponent, EncodeUrlPipe],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    SearchRoutingModule,
  ],
  providers: [SearchService],
})
export class SearchModule {}
