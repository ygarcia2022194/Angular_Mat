import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit{
  displayedColumns: string[] = ['id', 'nombre', 'edad'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
const ELEMENT_DATA = [
  { id: 1, nombre: 'John Doe', edad: 25 },
  { id: 2, nombre: 'Jane Smith', edad: 30 },
  { id: 3, nombre: 'Yojhan Garcia', edad: 19 },
  { id: 4, nombre: 'Jahidelin', edad: 13 },
  { id: 5, nombre: 'Leyda Palencia', edad: 20 },
  { id: 6, nombre: 'Wilver Garcia', edad: 21 },
  { id: 7, nombre: 'Heisel Echeverria', edad: 18 },
  { id: 8, nombre: 'Astrid Arevalo', edad: 17 },
  { id: 9, nombre: 'David Reyes', edad: 18 },
  { id: 10, nombre: 'Alex Raguay', edad: 40 },
  { id: 11, nombre: 'Allan Poch', edad: 21 },
  { id: 12, nombre: 'Marcos Luna', edad: 23 },
];