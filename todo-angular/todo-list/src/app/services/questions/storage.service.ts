import { Injectable } from '@angular/core';

import { QuestionItem,OptionItem } from '../../interfaces/question-item';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  private optionsList: OptionItem[][] = [
    [{ text: "All the time", points: 3,isActive:false },{ text: "Often", points: 2,isActive:false },{ text: "Rarely", points: 1,isActive:false },{ text: "Never", points: 0, isActive:false }],
    [{ text: "Red", points: 1, isActive:false },{ text: "Green", points: 2 ,isActive:false},{ text: "Blue", points: 3 ,isActive:false},{ text: "None", points: 0 ,isActive:false}],
    [{ text: "Rose", points: 3 ,isActive:false},{text: "Anemone", points: 2, isActive:false},{ text: "Lily", points: 1,isActive:false },{ text: "None", points: 0, isActive:false }],
    [{ text: "Carlsberg", points: 3,isActive:false },{ text: "Maccabi", points: 2,isActive:false },{ text: "Corona", points: 1 ,isActive:false},{ text: "I don't drink", points: 0,isActive:false }],
    [{ text: "summer", points: 3, isActive:false },{ text: "Spring", points: 2 ,isActive:false},{ text: "Fall", points: 1 ,isActive:false}, { text: "winter", points: 0,isActive:false }],
    [{ text: "Blues", points: 3 ,isActive:false},{ text: "rock", points: 2 ,isActive:false},{ text: "Pop", points: 1 ,isActive:false}, { text: "None", points: 0 ,isActive:false}],
    [{ text: "tail", points: 2 ,isActive:false},{ text: "Tofu", points: 3 ,isActive:false},{ text: "Nothing", points: 0 ,isActive:false}],
    [{ text: "Family", points: 3 ,isActive:false},{ text: "Religion", points: 2, isActive:false },{ text: "Hobbies", points: 1, isActive:false },{ text: "Nothing", points: 0, isActive:false}],
    [{ text: "Tel-Aviv", points: 3, isActive:false },{ text: "Ramat-Gan", points: 2,isActive:false },{ text: "Nothing", points: 1 ,isActive:false},{ text: "Bnei Brak", points: 0,isActive:false }],
    [{ text: "All the time", points: 3, isActive:false },{ text: "Often", points: 2, isActive:false },{ text: "Rarely", points: 1 ,isActive:false},{ text: "Never", points: 0 ,isActive:false}]];

  
  private questions: QuestionItem[] = [
    { id:1,title: "How often do you play sports?", answers: this.optionsList[0] },
    { id:2,title: "What’s your favorite color?", answers: this.optionsList[1] },
    { id:3,title: "What’s your favorite flower?", answers: this.optionsList[2] },
    { id:4,title: "What’s your favorite beer?", answers: this.optionsList[3] },
    { id:5,title: "What’s your favorite weather?", answers: this.optionsList[4] },
    { id:6,title: "What is your favorite music?", answers: this.optionsList[5] },
    { id:7,title: "Where are a dog's sweat glands located?", answers: this.optionsList[6] },
    { id:8,title: "What gives your life meaning?", answers: this.optionsList[7] },
    { id:9,title: "What city would you most like to live in?", answers: this.optionsList[8] },
    {id:10, title: "How  sports?", answers: this.optionsList[9] }
  ];

  private answers :OptionItem[] = [{ text: "All the time", points: 3,isActive:false },{ text: "Often", points: 2,isActive:false },{ text: "Rarely", points: 1,isActive:false },{ text: "Never", points: 0, isActive:false }];
  private question: QuestionItem = { id:11,title: "How often do you play sports?", answers: this.answers };


  constructor() {
    this.setData("questionsArray", this.questions);
   }

   getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

   setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
}
