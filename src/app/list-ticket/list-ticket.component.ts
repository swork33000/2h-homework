import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ticket } from '../../interfaces/ticket.interface';
import { User } from '../../interfaces/user.interface';
import { BackendService } from './../backend.service';


@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {



  ngOnInit(): void {
  }
  public readonly users$: Observable<User[]> = this.backendService.users();
  public readonly tickets$: Observable<Ticket[]> = this.backendService.tickets();

  constructor(private readonly backendService: BackendService,
    private readonly router: Router
    ) {}
  createTicket(){


  }
  goToTicketDetail(id:number){
    console.log("ticket ",id)
    this.router.navigate([`ticket/${id}`]);

  }
}
