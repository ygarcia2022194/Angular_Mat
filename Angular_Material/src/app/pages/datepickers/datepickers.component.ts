import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';


@Component({
  selector: 'app-datepickers',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './datepickers.component.html',
  styleUrl: './datepickers.component.scss'
})
export class DatepickersComponent {
  minDate = new Date(2023, 0, 1); 
  maxDate = new Date();

  chosenMonthHandler(normalizedMonth: Date, datepicker: any) {
    console.log(normalizedMonth);
    datepicker.close();
  }

  MY_FORMATS = {
    parse: { dateInput: 'MMM DD, YYYY' },
    display: { dateInput: 'MMM DD, YYYY', monthYearLabel: 'MMM YYYY', dateA11yLabel: 'LL', monthYearA11yLabel: 'MMMM YYYY' }
  };

}
