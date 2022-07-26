import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

type Statistics = {
  customers: number;
  newCustomers: number;
  products: number;
  newProducts: number;
};

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {
  }

  getStatistics() {
    const token = localStorage.getItem("jwtToken");

    return this.http.get<Statistics>("http://localhost:8080/api/v1/statistics", {
      headers: new HttpHeaders({ "Authorization": "Bearer " + token }
      )
    });
  }
}
