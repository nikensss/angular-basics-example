import { Component, OnInit, Input } from '@angular/core';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.scss']
})
export class BoatComponent implements OnInit {
  @Input() boat: {
    name: string;
    year: number;
    img: string;
  };

  constructor(public clock: ClockService) {}

  ngOnInit(): void {}
}
