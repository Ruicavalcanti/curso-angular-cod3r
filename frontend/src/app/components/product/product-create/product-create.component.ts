import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../product.model';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'; // ✅ adicione isso


@Component({
  selector: 'app-product-create',
  imports: [MatButtonModule,FormsModule,MatFormFieldModule,MatInputModule,MatCardModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  product: Product = {
    name: '',
    price: 0.00
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

