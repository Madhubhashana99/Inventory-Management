import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-ad-purchase-order',
  templateUrl: './inventory-ad-purchase-order.component.html',
  styleUrls: ['./inventory-ad-purchase-order.component.css']
})
export class InventoryAdPurchaseOrderComponent {
  product: any = {

    product_name: '',
    product_brand: '',
    product_quantity: null
  };

  increaseQuantity() {

    if(!this.isRequired()){
      alert("Pleace fill all Fields!!");
      return;
    }

  }

  isRequired(): boolean{
    return !!this.product.product_name && !!this.product.product_brand && !!this.product.quantity;
  }
}
