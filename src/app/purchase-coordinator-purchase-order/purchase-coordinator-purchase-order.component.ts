import { Component } from '@angular/core';
import { PurchaseCoordinatorPurchaseOrderService } from './purchase-coordinator-purchase-order.service';

@Component({
  selector: 'app-purchase-coordinator-purchase-order',
  templateUrl: './purchase-coordinator-purchase-order.component.html',
  styleUrls: ['./purchase-coordinator-purchase-order.component.css']
})
export class PurchaseCoordinatorPurchaseOrderComponent {
  constructor(private productService: PurchaseCoordinatorPurchaseOrderService) {}
  
  reduceQuantity(product_name: string, product_brand: string, product_quantity: number): void {
    this.productService.reduceProductQuantity(product_name, product_brand, product_quantity).subscribe(() => {
      alert('Product quantity updated successfully');
    }, error => {
      alert('Error updating product quantity');
      console.error(error);
    });
  }

  onSubmit(formValue: any): void {
    this.reduceQuantity(formValue.product_name, formValue.product_brand, formValue.product_quantity);
  }
}