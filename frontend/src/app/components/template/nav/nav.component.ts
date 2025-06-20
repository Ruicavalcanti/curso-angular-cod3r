import { Component } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { HomeComponent } from '../../../views/home/home.component'; 
import { ProductCrudComponent } from '../../../views/product-crud/product-crud.component'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [MatToolbarModule,MatSidenavModule,MatListModule,HomeComponent,ProductCrudComponent,RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
