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
import { BookstoreListComponent } from "./bookstore-list/bookstore-list.component";
import { BookCreateComponent } from "./book-create/book-create.component";
import { BookstoreCreateComponent } from "./bookstore-create/bookstore-create.component";
import { AuthorCreateComponent } from "./author-create/author-create.component";
import { BookService } from "./book.service";
import { InMemoryBookService } from "./in-memory-book.service";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { environment } from "./environments/environment";
import { RequestService } from './request.service';

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
      { path: "create", component: BookCreateComponent },
      { path: "authors", component: AuthorListComponent },
      { path: "authors/create", component: AuthorCreateComponent },
      { path: "bookstores", component: BookstoreListComponent },
      { path: "**", redirectTo: "" }
    ]),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(InMemoryBookService)
      : [],
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
    BookstoreListComponent,
    BookCreateComponent,
    AuthorCreateComponent,
    BookstoreCreateComponent,
    AuthorCreateComponent
  ],
  bootstrap: [AppComponent],
  providers: [BookService, InMemoryBookService, RequestService]
})
export class AppModule {}
