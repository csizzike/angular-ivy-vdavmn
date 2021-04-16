import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BookTable } from "./book-list/books";
import { RequestService } from "./request.service";

const BOOK_URL = "api/Books";

@Injectable()
export class BookService {
  constructor(
    private http: HttpClient,
    private requestService: RequestService
  ) {}

  getBooks(): Observable<any> {
    return this.requestService.get<any>(BOOK_URL);
  }

  getBook(isbn) {
    return this.requestService.get("${BOOK_URL}/${isbn}");
  }
}
