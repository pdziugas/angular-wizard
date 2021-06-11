import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StepsService } from 'src/app/core/services/steps.service';
import { StepperModel } from 'src/app/models/stepper.model';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  steps: Observable<StepperModel[]> | undefined;
  currentStep: Observable<StepperModel> | undefined;

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {
    this.steps = this.stepsService.getAllSteps();
    this.currentStep = this.stepsService.getCurrentStep();
    console.log(this.currentStep);
  }
}
