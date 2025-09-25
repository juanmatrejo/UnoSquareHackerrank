import { Component, Input } from '@angular/core';
import { Result } from '../../models/result.model';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail {

  @Input()
  result: Result = new Result;
}