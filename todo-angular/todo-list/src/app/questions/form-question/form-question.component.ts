import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {OptionItem } from 'src/app/interfaces/question-item';



@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.scss']
})
export class FormQuestionComponent implements OnInit {
  @Input() options :OptionItem [];


  answerControl = '';


  constructor() { }

  ngOnInit(): void {
  }

}
