import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo: string = '';
  nextId: number = 1;

  addTodo(): void {
    if (this.newTodo.trim() === '') {
      return;
    }
    
    this.todos.push({
      id: this.nextId++,
      title: this.newTodo.trim(),
      completed: false
    });
    
    this.newTodo = '';
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  editTodo(todo: Todo): void {
    todo.editing = true;
  }

  updateTodo(todo: Todo, newTitle: string): void {
    if (newTitle.trim() === '') {
      this.deleteTodo(todo.id);
      return;
    }
    
    todo.title = newTitle.trim();
    todo.editing = false;
  }

  cancelEdit(todo: Todo): void {
    todo.editing = false;
  }
  
  toggleComplete(todo: Todo): void {
    todo.completed = !todo.completed;
  }
}
