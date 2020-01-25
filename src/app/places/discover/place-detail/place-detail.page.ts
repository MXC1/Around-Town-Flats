import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

  onBookPlace() {
    this.modalController
    .create({component: CreateBookingComponent})
    .then(modalElement => (
      modalElement.present()
    ));
    // this.navCtrl.navigateBack('places/tabs/discover');
  }

}
