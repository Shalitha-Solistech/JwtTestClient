import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  customers:any;

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.http.get("https://localhost:5001/api/customer")
    .subscribe({
      next: (result:any) => this.customers = result,
      error: (err: HttpErrorResponse) => console.log(err) 
    })
  }

}
