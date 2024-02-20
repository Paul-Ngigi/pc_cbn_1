import { Component, Input } from '@angular/core';
import { IOrder } from 'src/app/interfaces/order.interface';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent {
  @Input() orders: IOrder[];

  download() {}
}
