import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class RegisterApartmentComponent implements OnInit {

  registerApartmentForm = this.fb.group({
    type: ['', Validators.required],
    name: ['', Validators.required],
    area: ['', Validators.required],
    floor: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  __onSubmit() {
    if(this.registerApartmentForm.valid) {
      console.log(this.registerApartmentForm.value);
    } else {
      alert("Formulario no valido");
    }
  }

  ngOnInit(): void {
  }

}
