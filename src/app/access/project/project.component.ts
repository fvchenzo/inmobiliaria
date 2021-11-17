import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class RegisterProjectComponent implements OnInit {

  registerProjectForm = this.fb.group({
    name: ['', Validators.required],
    location: ['', Validators.required],
    priceBase: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  __onSubmit(){
    if(this.registerProjectForm.valid) {
      console.log(this.registerProjectForm.value);
    } else {
      alert("Formulario no valido");
    }
  }

  ngOnInit(): void {
  }

}
