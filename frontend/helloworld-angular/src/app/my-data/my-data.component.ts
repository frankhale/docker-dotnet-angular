import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { MatTableModule } from '@angular/material/table';

export interface Data {
  name: string;
  message: string;
};

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule
  ],
})
export class MyDataComponent {
  data: Data = {} as Data;
  displayedColumns: string[] = ['name', 'message'];
  dataSource = [] as Data[];

  @Input() service: string = "service1";

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData(this.service).subscribe((data) => {
      console.log(data);
      this.data = data;
      this.dataSource = [this.data];
    });
  }
}
