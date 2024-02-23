import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
})
export class SubscriptionComponent {
  private token = localStorage.getItem("token");


  // get the ids of prices
  basic = 'price_1OgTvXKONGfFwiNu0vIGKRAM';
  premium = 'price_1OgU3UKONGfFwiNuropvSjpd';

  // load the stripejs
  stripePromise = loadStripe('pk_test_51OfJo4KONGfFwiNuP6J5i18y7EjzrZTtMdyPsJDhaku5XEhtg2ZH7K7PuVO6I1wFRVy9zsdxCrneEnvtyZ6t8ehb007EKu7aJt');

  constructor(private http: HttpClient) { }

  async checkoutBasic(): Promise<void> {
    this.checkout(this.basic);
  }

  async checkoutPremium(): Promise<void> {
    this.checkout(this.premium);
  }

  /**

   this method do the checkout for a priceId and it is async because it awaiting the Promise object*/
  private async checkout(priceId: String): Promise<void> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    const checkout = {
      priceId: priceId,
      cancelUrl: 'http://localhost:4200/',
      successUrl: 'http://localhost:4200/',};
    const stripe = await this.stripePromise;
    if (stripe !== null && stripe !== undefined) {
      this.http.post('http://localhost:8080/api/payment/subscription', checkout,{headers}).subscribe((data: any) => {

      stripe.redirectToCheckout({
        sessionId: data.sessionId,});},(err : any)=>{

      console.log(err);

    }
  )

  }
}
}
