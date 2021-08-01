import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encodeUrl',
})
export class EncodeUrlPipe implements PipeTransform {
  transform(value: string): string {
    return encodeURIComponent(value);
  }
}
