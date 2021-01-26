import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-conversion',
  templateUrl: './single-conversion.component.html',
  styleUrls: ['./single-conversion.component.css'],
})
export class SingleConversionComponent implements OnInit {
  @Input() amount!: string;
  @Input() convertFrom!: string;
  @Input() conversion!: string;
  @Input() convertTo!: string;

  constructor() {}

  ngOnInit(): void {}
}
