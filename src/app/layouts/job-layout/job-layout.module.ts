import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JobLayoutComponent } from './job-layout.component';

@NgModule({
  declarations: [JobLayoutComponent],
  exports: [JobLayoutComponent],
  imports: [CommonModule, RouterModule],
})
export class JobLayoutModule {}
