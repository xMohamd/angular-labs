import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registeration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css',
})
export class RegisterationComponent {
  name!: string;
  age!: number;
  @Output() onAddEvent = new EventEmitter<{ name: string; age: number }>();
  onAdd() {
    this.onAddEvent.emit({ name: this.name, age: this.age });
    console.log(this.name, this.age);
  }
}
