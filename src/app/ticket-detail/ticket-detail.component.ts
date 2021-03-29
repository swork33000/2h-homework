import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Ticket } from "../../interfaces/ticket.interface";
import { User } from "../../interfaces/user.interface";
import { BackendService } from "../backend.service";

@Component({
  selector: "app-ticket-detail",
  templateUrl: "./ticket-detail.component.html",

})
export class TicketDetailComponent implements OnInit {
  public ticketDetail: any;
  public id: number;

  ngOnInit(): void {
    this.route.params.subscribe(async (routeParams) => {
      console.log("in det", routeParams.id);
      this.id = routeParams.id;
      this.ticketDetail$ = this.backendService.ticket(routeParams.id);
    });
  }
  public readonly users$: Observable<User[]> = this.backendService.users();
  public ticketDetail$: Observable<Ticket> = undefined;

  constructor(
    private readonly backendService: BackendService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  goToList() {
    this.router.navigate([`list-ticket`]);
  }
  updateTicket(id) {
    // ticket
  }
}
