import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  public form!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.initializeForm();
  }

  public submitForm() {}

  public initializeForm() {
    this.form = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required]),
    });
  }
}
