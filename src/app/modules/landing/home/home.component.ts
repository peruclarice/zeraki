import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  displayModal = false;
  yearlyBilling: boolean = true;
  bootstrap: any;

  joinTheWaitlistModal() {
      this.displayModal = !this.displayModal;
  }

  ngAfterViewInit() {
    // var myCarousel = document.querySelector('#carouselExampleCaptions');
    // var carousel = new this.bootstrap.Carousel(myCarousel, {
    //   interval: 2000,
    //   wrap: true
    // });
  }
}
