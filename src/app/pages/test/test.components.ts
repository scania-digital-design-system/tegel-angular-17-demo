import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "example-product-list",
  standalone: true,
  imports: [TegelModule],
  template: `
    @for (product of products; track product.productId) {
    <span>{{ product.description }}</span>

    <tds-button size="sm" [attr.id]="product.productId">
      <tds-icon name="kebab" slot="icon"></tds-icon>
    </tds-button>

    <tds-popover-menu [selector]="'#' + product.productId">
      <tds-popover-menu-item>
        <button (click)="moveProductDown(product.productId)">Move down</button>
      </tds-popover-menu-item>
    </tds-popover-menu>
    <tds-divider></tds-divider>
    }
  `,
})
export class ExampleProductListComponent {
  public products = [
    {
      productId: "product-id-1",
      description: "Truck",
    },
    {
      productId: "product-id-2",
      description: "Bus",
    },
    {
      productId: "product-id-3",
      description: "Tractor",
    },
  ];

  public moveProductDown(productId: string): void {
    const productIndex = this.products.findIndex(
      (product) => product.productId === productId
    );

    if (productIndex >= this.products.length - 1) {
      return;
    }

    const newProducts = structuredClone(this.products);
    const matchingProduct = newProducts[productIndex];
    newProducts.splice(productIndex, 1);
    newProducts.splice(productIndex + 1, 0, matchingProduct);
    this.products = structuredClone(newProducts);
  }
}
