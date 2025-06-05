import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-product-create',
  imports: [MatButtonModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
constructor(private productService: ProductService,
    private router: Router) { }



  createProduct(): void {
    this.productService.showMessage('Produto criado!');
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }
}

