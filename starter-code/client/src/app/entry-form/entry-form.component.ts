import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FileUpLoader } from '';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})

export class EntryFormComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `/journals/`
  });

  newJournal = {
    title: '',
    content: '',
    date: Date
  };
  feedback: string;

  constructor() { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

  // addSpec(spec) {
  //   this.newPhone.specs.push(spec);
  // }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('title', this.newJournal.title);
      form.append('content', this.newJournal.content);
      form.append('date', this.newJournal.date);
      // form.append('specs', JSON.stringify(this.newPhone.specs));
    };

    this.uploader.uploadAll();
  }
}
