import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Hero {
  name: string;
  alterEgo?: string;
}

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  model: Hero = { name: 'Dr. Nice' };

  onSubmit(form: NgForm) {
    console.log('Form submitted!', form.value);
  }
}
