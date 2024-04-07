import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';
import { StudentsComponent } from './students/students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterationComponent, StudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  students: Array<{ name: string; age: number }> = [];
  GetData(data: { name: string; age: number }) {
    this.students.push(data);
    console.log(this.students);
  }
}
