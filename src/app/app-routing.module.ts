import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListTicketComponent } from "./list-ticket/list-ticket.component";
import { TicketDetailComponent } from "./ticket-detail/ticket-detail.component";

const routes: Routes = [
  { path: "list-ticket", component: ListTicketComponent },
  { path: "ticket/:id", component: TicketDetailComponent },
  { path: "**", redirectTo: "list-ticket", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
