import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CancellationModalComponent } from './components/cancellation-modal/cancellation-modal.component';
import { NoFoundDataComponent } from './components/no-found-data/no-found-data.component';
@NgModule({
    declarations: [CancellationModalComponent,NoFoundDataComponent],
    imports: [CommonModule],
    exports: [CancellationModalComponent,NoFoundDataComponent],
  
})
export class SharedModule {}
