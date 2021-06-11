import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StepperModel } from 'src/app/models/stepper.model';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  steps$: BehaviorSubject<StepperModel[]> = new BehaviorSubject<StepperModel[]>(
    [
      { stepIndex: 1, stepTitle: 'Shipping', isComplete: false },
      { stepIndex: 2, stepTitle: 'Payment', isComplete: false },
      { stepIndex: 3, stepTitle: 'Review', isComplete: false },
    ]
  );
  currentStep$: BehaviorSubject<StepperModel> =
    new BehaviorSubject<StepperModel>(this.steps$.value[0]);

  constructor() {
    this.currentStep$.next(this.steps$.value[0]);
  }

  setCurrentStep(step: StepperModel): void {
    this.currentStep$.next(step);
  }

  getCurrentStep(): Observable<StepperModel> {
    return this.currentStep$.asObservable();
  }

  getAllSteps(): Observable<StepperModel[]> {
    return this.steps$.asObservable();
  }

  nextStep(): void {
    const index = this.currentStep$.value.stepIndex;

    if (index < this.steps$.value.length) {
      this.currentStep$.next(this.steps$.value[index]);
    }
  }

  isLastStep(): boolean {
    return this.currentStep$.value.stepIndex === this.steps$.value.length;
  }
}
