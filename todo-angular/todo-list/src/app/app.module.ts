import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListService } from './services/todo-list.service';
import { ListManagerComponent } from './list-manager/list-manager.component';


@NgModule({
  declarations: [ //component
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent,

  ],
  imports: [ //modules
    BrowserModule,
    FormsModule
  ],
  providers: [TodoListService], //servise
  bootstrap: [AppComponent]
})
export class AppModule { }
