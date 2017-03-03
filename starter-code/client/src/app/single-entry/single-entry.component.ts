import { Component, OnInit } from '@angular/core';
import { JournalService } from './../journal.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [ JournalService ]
})
export class SingleEntryComponent implements OnInit {
  journal: any;

  constructor(
    private route: ActivatedRoute,
    private journalService: JournalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getJournalDetails(params['id']);
    });
  }

  getJournalDetails(id) {
    this.journalService.get(id)
      .subscribe((journal) => {
        this.journal = journal;
      });
  }

  deleteJournal() {
    if (window.confirm('Are you sure?')) {
      this.journalService.remove(this.journal._id)
        .subscribe(() => {
          this.router.navigate(['']);
        });
    }
  }

}
