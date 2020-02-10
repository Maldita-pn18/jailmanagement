import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PrisonersComponent } from './prisoners/prisoners.component';

// Material 
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './user-services/services.service'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { VisitorFormComponent } from './visitor-form/visitor-form.component';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatExpansionModule } from '@angular/material/expansion';
import { AddPrisonerComponent } from './add-prisoner/add-prisoner.component';
import { ViewInmateComponent } from './view-inmate/view-inmate.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { VisitHistoryComponent } from './visit-history/visit-history.component';
import { VisitorComponent } from './visitor/visitor.component';
import { DormsComponent } from './dorms/dorms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    PrisonersComponent,
    FormComponent,
    VisitorFormComponent,
    AddPrisonerComponent,
    ViewInmateComponent,
    ErrorPageComponent,
    VisitHistoryComponent,
    VisitorComponent,
    DormsComponent
  ],
  entryComponents: [AddPrisonerComponent, ViewInmateComponent],
  imports: [
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MatSidenavModule,
    ScrollingModule,
    MatDatepickerModule,
    MatListModule,
    ReactiveFormsModule,
    DragDropModule,
    MatInputModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
