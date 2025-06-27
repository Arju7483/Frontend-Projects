import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angularapp';
  empList: Employee[] = [];
  empForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      empID: null
    });

    const old = localStorage.getItem("data");
    const parsedData: Employee[] = old ? JSON.parse(old) : [];
    this.empList = parsedData;
  }

 submitForm() {
  if (this.empForm.valid) {
    const old = localStorage.getItem("data");
    const parsedData: Employee[] = old ? JSON.parse(old) : [];
    const nextID = parsedData.length + 1;
    
    // Create new Employee object explicitly
    const newData: Employee = {
      empID: Date.now(),
      name: this.empForm.value.name!,
      email: this.empForm.value.email!
    };

    parsedData.push(newData);
    localStorage.setItem("data", JSON.stringify(parsedData));
    this.empList = parsedData;
    this.empForm.reset();
  }
}
Delete(id: number): void {
  const index: number = this.empList.findIndex(c => c.empID === id);
  if (index !== -1) {
    this.empList.splice(index,1);
    localStorage.setItem("data", JSON.stringify(this.empList));
  }
}

}
