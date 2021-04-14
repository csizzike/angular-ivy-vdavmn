import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { AuthorListComponent } from "./author-list/author-list.component";
import { AuthorDetailsComponent } from "./author-details/author-details.component";
import { BookstoreListComponent } from "./bookstore-list/bookstore-list.component";
//import { InMemoryEventService } from './in-memory-event.service';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { environment } from '../environments/environment';
//import { RequestService } from './request.service';
//import { httpInterceptorProviders } from './http-interceptors';
//import { AuthService } from './auth.service';
//import { AppRoutingModule } from './app-routing.module';
//import { StoreModule } from '@ngrx/store';
//import { EventsFeatureState } from './events/store/events.reducer';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", component: HelloComponent },
      { path: "books", component: BookListComponent },
      { path: "books/:isbn", component: BookDetailsComponent },
      { path: "authors", component: AuthorListComponent },
      { path: "authors/:name", component: AuthorDetailsComponent },
      { path: "bookstores", component: BookstoreListComponent }
    ]),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule /*,
		MatMenuModule,
		MatSelectModule,
		MatTableModule,
		MatAutocompleteModule,
		MatRadioModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatDatepickerModule,
		MatCardModule,
		MatPaginatorModule,
		MatSortModule,
		MatCheckboxModule,
		MatSnackBarModule,
		MatExpansionModule,
		MatTabsModule,
		MatTooltipModule,
		MatDialogModule,
    MatDividerModule*/
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    BookListComponent,
    BookDetailsComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
    BookstoreListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
