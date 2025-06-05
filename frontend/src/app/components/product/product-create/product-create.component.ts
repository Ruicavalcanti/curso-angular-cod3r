import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../product.model';
@Component({
  selector: 'app-product-create',
  imports: [MatButtonModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  product: Product = {
    name: 'Produto de Teste',
    price: 125.98
  }
  constructor(private productService: ProductService,
    private router: Router) { }

  createProduct(): void {
    this.productService.create(this.product)
      .subscribe(() => {
        this.productService.showMessage('Produto criado!');
        this.router.navigate(['/products'])
      })

  }
  cancel(): void {
    this.router.navigate(['/products'])
  }
}

