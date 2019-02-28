import { NgModule } from '@angular/core'
import { 
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule
} from '@angular/material';

@NgModule({
    exports: [ 
       MatFormFieldModule,
       MatInputModule,
       MatSelectModule,
       MatButtonModule,
       MatDividerModule,
       MatCardModule
    ]
})
export class MaterialModule { }