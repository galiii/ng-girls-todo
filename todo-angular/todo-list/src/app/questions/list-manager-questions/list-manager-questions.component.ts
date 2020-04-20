import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions/questions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionItem } from '../../interfaces/question-item';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list-manager-questions',
  templateUrl: './list-manager-questions.component.html',
  styleUrls: ['./list-manager-questions.component.scss']
})
export class ListManagerQuestionsComponent implements OnInit {

 // question: QuestionItem;
  questions: Observable<QuestionItem[]>;
  selectedId: number;
 // question$: Observable<QuestionItem>;

  constructor(private service: QuestionsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.getQuestions();
    this.getAllQuestions();
  }

  /*
  private getQuestions() {
    console.log("line 27");
    this.question = this.service.getQuestion(11);
    console.log("line 32",this.question);
    /*this.route.params.subscribe(
      params => {
          const id = +params['id'];
          this.question = this.service.getQuestion(id);
      }
  );

  }*/

  private getAllQuestions(){
/*
    this.questions = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getQuestionsList();
      })
    );*/
console.log(this.questions);

    console.log("Hello in line 37 list manager component");
    this.questions = this.service.getQuestionsList();
  }

}



/**
 * let arr = ['a','b','c'];

printScramble(arr);

// abc
// acb
// bca
// bac
//cba
//cab


//[a]  // a
//[a,b] // ab ba


function printScramble(arr){

if(!arr){
return;
}
let result = [];
for (index : arr) {

	letter = arr[index];
  arrayWithoutLetter = removeIndexFromArray(arr, index);
  allCombinationsWithoutLEtter = printScramble(arrayWithoutLetter)
  for (comb : allCombinationsWithoutLetter){
	  result.push(firstLetter + comb)
  }
  

}
//for(i=0;i<arr.length;i++){
//console.log(arr[i]);
//}


printScramble(arr);
}
*/
