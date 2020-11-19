import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { OverviewComponent } from './overview/overview.component';
import { PipeComponent } from './pipe/pipe.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentService } from './student.service';
import { IdComponent } from './id/id.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';
// import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    OverviewComponent,
    PipeComponent,
    PortfolioComponent,
    StudentDetailsComponent,
    IdComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [StudentService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
