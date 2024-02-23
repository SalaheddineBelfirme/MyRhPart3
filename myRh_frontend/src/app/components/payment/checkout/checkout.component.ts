import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  private token = localStorage.getItem("token");

  stripePromise = loadStripe('pk_test_51OfJo4KONGfFwiNuP6J5i18y7EjzrZTtMdyPsJDhaku5XEhtg2ZH7K7PuVO6I1wFRVy9zsdxCrneEnvtyZ6t8ehb007EKu7aJt');
  constructor(private http: HttpClient) {}

  async pay(): Promise<void> {

    const payment = {
      name: 'Iphone',
      currency: 'usd',
      amount: 990,
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
    };

    const stripe = await this.stripePromise;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

    this.http
      .post('http://localhost:8080/api/payment',payment,{headers})
      .subscribe((data: any) => {
        stripe?.redirectToCheckout({
          sessionId: data.id,
        });

      },(error) => {
      console.error('Error processing payment:', error);
    }
  );
  }
}
