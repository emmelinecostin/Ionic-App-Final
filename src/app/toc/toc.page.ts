import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [ 
    {
      title: "Chapter 1 | The Beginning", 
      url: "/chapter1"
    },
    {
      title: "Chapter 2 | Who is Howey?", 
      url: "/chapter2"
    },
    {
      title: "Chapter 3 | Journey through Avondale", 
      url: "/chapter3"
    },
    {
      title: "Chapter 4 | Magnificent ", 
      url: "/chapter4"
    }, 
    {
      title: "Chapter 5 | Finale", 
      url: "/chapter5"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
