import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Ticket } from "../../interfaces/ticket.interface";
import { User } from "../../interfaces/user.interface";
import { BackendService } from "./../backend.service";

@Component({
  selector: "app-list-ticket",
  templateUrl: "./list-ticket.component.html",
  styleUrls: ["./list-ticket.component.css"],
})
export class ListTicketComponent implements OnInit {
  public loading: boolean;
  public apiError: boolean;

  ngOnInit(): void {

  }
  public readonly users$: Observable<User[]> = this.backendService.users();
  public readonly tickets$: Observable<Ticket[]> = this.backendService
    .tickets()
    


    // .toPromise()
    // .then((result:Ticket[]) => {
    //   this.loading = false;
    // })
    // .catch((err) => {
    //   this.apiError = true;
    // });

  constructor(
    private readonly backendService: BackendService,
    private readonly router: Router
  ) {
    // this.loading = true;
    // this.apiError = false;
  }
  createTicket(description) {
    this.backendService
      .newTicket({ description: description })
      .subscribe((created) => {
        console.log("created ", created);
      });
  }
  goToTicketDetail(id: number) {
    console.log("ticket ", id);
    this.router.navigate([`ticket/${id}`]);
  }
}
