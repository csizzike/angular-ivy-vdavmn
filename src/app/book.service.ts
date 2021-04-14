import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BookTable } from "./book-list/books";

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks() {
    return BookTable.books;
  }

  getBook(isbn) {
    return BookTable.books.find(e => e.isbn === isbn);
  }
}
