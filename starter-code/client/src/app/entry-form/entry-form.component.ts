import { Component, OnInit } from '@angular/core';
import { JournalService } from './../journal.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css'],
  providers: [JournalService]
})

export class EntryFormComponent implements OnInit {

newJournal = {
    title: String,
    content: String,
    date: Date
  };

  constructor(private route: ActivatedRoute,
  private journals: JournalService,
  private router: Router) { }

  ngOnInit() {  }

  submit() {
     this.journals.createJournal(this.newJournal)
   }
 }
