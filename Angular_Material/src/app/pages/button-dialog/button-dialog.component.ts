import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-button-dialog',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './button-dialog.component.html',
  styleUrl: './button-dialog.component.scss'
})
export class ButtonDialogComponent {
  nombre: string = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { title: 'Prueba diálogo', name: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.nombre = result;
      }
    });
  }
}
