import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';

interface Data {
  name: string;
  message: string;
};

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css']
})
export class MyDataComponent {
  data: Data = {} as Data;

  @Input() service: string = "service1";

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData(this.service).subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
}
