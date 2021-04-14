import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class BookListComponent implements OnInit {
  constructor() {}

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

  ngOnInit() {}
}
