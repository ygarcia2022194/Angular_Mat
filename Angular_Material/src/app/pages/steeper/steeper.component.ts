import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { MatStepper } from '@angular/material/stepper';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-steeper',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './steeper.component.html',
  styleUrl: './steeper.component.scss'
})
export class SteeperComponent implements OnInit{
  formGroup: FormGroup = new FormGroup({});
  firstFormGroup: FormGroup = new FormGroup({});
  secondFormGroup: FormGroup = new FormGroup({});
  thirdFormGroup: FormGroup = new FormGroup({});
  showDPI: boolean = false;

  constructor(private _formBuilder: FormBuilder, private dateAdapter: DateAdapter<any>) {
    this.dateAdapter.setLocale('es-MX');
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      birthDate: [null, [Validators.required, this.dateValidator]]
    });

    this.secondFormGroup = this._formBuilder.group({
      name: [null, [Validators.required, Validators.pattern('^[A-Za-z]+$')]]
    });

    this.thirdFormGroup = this._formBuilder.group({
      dpi: ['']
    });

    this.formGroup = this._formBuilder.group({
      firstFormGroup: this.firstFormGroup,
      secondFormGroup: this.secondFormGroup,
      thirdFormGroup: this.thirdFormGroup
    });
  }

  dateValidator(control: any) {
    const currentDate = new Date();
    const selectedDate = new Date(control.value);

    if (selectedDate >= currentDate) {
      return { matDatepickerMin: true };
    }

    return null;
  }

  toggleDPI(checked: boolean) {
    this.showDPI = checked;
    if (!checked) {
      this.thirdFormGroup.get('dpi')?.setValue('');
    }
  }
}
