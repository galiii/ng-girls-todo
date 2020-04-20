import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListManagerQuestionsComponent } from './list-manager-questions/list-manager-questions.component';
import {QuestionComponent} from './question/question.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: "questions", component:ListManagerQuestionsComponent,data: { animation: 'question' } },
  { path: "question/:id", component:QuestionComponent,data: { animation: 'question' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
