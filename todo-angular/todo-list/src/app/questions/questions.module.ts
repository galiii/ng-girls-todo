import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';

import {QuestionComponent} from "./question/question.component";

import { from } from 'rxjs';
import { ListManagerQuestionsComponent } from './list-manager-questions/list-manager-questions.component';
import { FormQuestionComponent } from './form-question/form-question.component';

@NgModule({
  declarations: [
    QuestionComponent,
    ListManagerQuestionsComponent,
    FormQuestionComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule
  ]
})
export class QuestionsModule { }
