import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact, ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css'],
})
export class ContactCreateComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });
  constructor(
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createContact() {
    this.contactsService
      .createContact(this.contactForm.value)
      .subscribe((contact) => {
        this.router.navigate(['/contacts']);
      });
  }
}
