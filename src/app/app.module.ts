import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent, ListTicketComponent, TicketDetailComponent],
    imports: [BrowserModule,AppRoutingModule],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
