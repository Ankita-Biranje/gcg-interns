import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  heroForm!: FormGroup;

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl('Dr. Nice', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  get nameControl() {
    return this.heroForm.get('name');
  }

  get emailControl() {
    return this.heroForm.get('email');
  }

  onSubmit() {
    console.log('Form submitted!', this.heroForm.value);
  }
}
