import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MagnifierDirective } from './directives/magnifier.directive';
import { YearPipe } from './pipes/year.pipe';
import { BoatComponent } from './components/boat/boat.component';
import { CoolModule } from './modules/cool/cool.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MagnifierDirective,
    YearPipe,
    BoatComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CoolModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
