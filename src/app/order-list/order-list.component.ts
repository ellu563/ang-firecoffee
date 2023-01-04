import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  coffeeOrders: any;

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    // aina kun komponentti latautuu niin haetaan kannasta tilaustiedot
    this.getCoffeeOrders();
  }

  getCoffeeOrders = () =>
    this.ordersService
      .getCoffeeOrders()
      .subscribe((res) => (this.coffeeOrders = res));

  markCompleted = (data: any) => this.ordersService.updateCoffeeOrder(data);

  deleteOrder = (data: any) => this.ordersService.deleteCoffeeOrder(data);
}
