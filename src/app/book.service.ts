import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BookTable } from "./book-list/books";

const BOOK_URL = "api/Books";

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(BOOK_URL);
  }

  getBook(isbn) {
    return this.http.get("${BOOK_URL}/${isbn}");
  }
}
