import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { StorageService } from './storage.service';
import { QuestionItem } from 'src/app/interfaces/question-item';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private storage:  StorageService) {}


  getQuestionsList(): Observable<QuestionItem[]>{
    return this.storage.getData("questionsArray");
  }


/*
  getQuestionsList(): QuestionItem{
    return this.storage.getData("questionsArray");
  }*/
 
  getQuestion(id: number | string) {
    
   console.log("the id is",typeof id);
   const som=this.getQuestionsList()
   id=+id;
  // console.log("the id is",typeof id);
    //console.log("line 30",som[0]);
    return som[--id];

}
}
