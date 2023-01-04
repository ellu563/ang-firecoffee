import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  // taulukko josta syntyvät napit joista valitaan juomat
  coffees = [
    'Americano',
    'Flat White',
    'Cappuccino',
    'Latte',
    'Espresso',
    'Machiato',
    'Mocha',
    'Hot Chocolate',
    'Tea',
  ];
  coffeeOrder: string[] = []; // mihin tilatut juomat tulevat

  constructor(public ordersService: OrdersService) {}

  ngOnInit(): void {}

  // perus metodi, käsittelee vain käyttöliittymää, eli ei lisää kantaan viel mitään
  addCoffee(coffee: string) {
    this.coffeeOrder.push(coffee);
  }
  // arrow syntaksilla, käsittelee vain käyttöliittymää, eli ei poista kannasta viel mitään
  removeCoffee = (coffee: string) => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);
  };
  // tämä lähettää tilauksen kantaan
  onSubmit() {
    // liitetään coffeeOrder -taulukon sisältö lomakkeellle
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    // nimi, tilausnumero ja coffee order eli tilaus menevät data muuttujaan
    let data = this.ordersService.form.value;
    // then-metodi käsittelee promisen eli saadaan tieto asynkronisen tapahtuman tuloksesta
    this.ordersService
      .createCoffeeOrder(data)
      .then((res) => {
        console.log(res);
        /*do something here....
           maybe clear the form or give a success message*/
      })
      .catch((error) => console.error(error));
  }
}
