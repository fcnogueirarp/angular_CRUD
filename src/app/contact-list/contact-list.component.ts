import { Component, OnInit } from '@angular/core';
import { Contact, ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contactsService.listContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }
}
