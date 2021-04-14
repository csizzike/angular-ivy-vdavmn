import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.css"]
})
export class BookDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  books = [
    {
      isbn: 9781449365035,
      title: "Lord of the Rings",
      author: "Tolkien, J.R.",
      published: 1937,
      pages: 1321
    },
    {
      isbn: 9781491950296,
      title: "Programming JavaScript Applications",
      author: "Eric Elliott",
      published: 2014,
      pages: 254
    },
    {
      isbn: 9781449337711,
      title: "Designing Evolvable Web APIs with ASP.NET",
      author: "Glenn Block, et al.",
      published: 2014,
      pages: 538
    },
    {
      isbn: 9781449331818,
      title: "Learning JavaScript Design Patterns",
      author: "Addy Osmani",
      published: 2012,
      pages: 254
    },
    {
      isbn: 9781593277574,
      title: "Understanding ECMAScript 6",
      author: "Nicholas C. Zakas",
      published: 2016,
      pages: 352
    }
  ];

  book: any = {};

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.book = this.books.find(e => e.isbn === +params.get("isbn"));
    });
  }
}