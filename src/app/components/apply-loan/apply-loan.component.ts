import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'edureka-apply-loan-form',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanFormComponent implements OnInit {

  form: any = {}

  constructor() { }

  ngOnInit(): void {
  }

  applyLoan(applyLoanForm: Form) {

    console.log(applyLoanForm);

  }

}
