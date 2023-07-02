import { Component, OnInit } from '@angular/core';
import { Cart } from './core/interfaces/cart.model';
import { CartService } from './core/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'E-Commerce';
  cart: Cart = { items: [] };
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    })
  }
}
