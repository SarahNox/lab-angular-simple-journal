import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
export var routes = [
    { path: '', component: EntryListComponent },
    { path: 'journal/:id', component: SingleEntryComponent },
    { path: 'add', component: EntryFormComponent },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=../../../src/app/app.routing.js.map