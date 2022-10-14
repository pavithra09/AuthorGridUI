import { Component, OnInit } from '@angular/core';
import { AuthorListService } from './service/author-list-service';
import { AuthorListModel } from './model/author-list-model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'authorgrid';
  authorList: AuthorListModel[] = [];
  hiddenItems: any[] = [];
  
  constructor(private authorlistservice: AuthorListService) {
  }

  ngOnInit() {      
    // Simple GET request with response type <any>
    this.authorlistservice.getAuthorList().subscribe(resp => {
        console.log('Print the service response:' +JSON.stringify(resp));
        this.authorList = resp;
    })
  }
}
