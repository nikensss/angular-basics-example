import { Component, OnInit, OnDestroy } from '@angular/core';
import { VERSION } from '@angular/compiler';
import { of, Observable } from 'rxjs';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public clicked = false;
  public title = `Angular ${VERSION.full}`;
  public boats: Observable<
    {
      name: string;
      year: number;
      img: string;
    }[]
  >;

  constructor(private clockService: ClockService) {}

  get clock() {
    return this.clockService;
  }
  ngOnInit() {
    this.boats = of([
      {
        name: 'Starfire',
        year: 1977,
        img: 'assets/boat.jpg'
      },
      {
        name: 'Oracle',
        year: 2015,
        img: 'assets/boat2.jpg'
      }
    ]);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  handleClick() {
    this.clicked = true;
  }
}
