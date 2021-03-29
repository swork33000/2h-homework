import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [AppComponent, ListTicketComponent, TicketDetailComponent],
    imports: [BrowserModule,AppRoutingModule, BrowserAnimationsModule
    ,MatListModule,MatDialogModule, MatProgressSpinnerModule
],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
