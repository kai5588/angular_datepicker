// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-date-picker',
//   templateUrl: './date-picker.component.html',
//   styleUrls: ['./date-picker.component.scss']
// })
// export class DatePickerComponent {

// }
import { ChangeDetectionStrategy, Component } from "@angular/core";
import {
  DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE,
} from "@angular/material/core";
import {
  MomentDateAdapter,MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from "@angular/material-moment-adapter";
import { CustomHeaderComponent, CustomHeaderComponent2 } from "../../form-part/custom-header/custom-header.component";

export const MY_FORMATS = {
  parse: {
    dateInput: "DD/MMM",
  },
  display: {
    dateInput: "MM月DD日",
    monthYearLabel: "MMM",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY",
  },
};

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DatePickerComponent {
  header = CustomHeaderComponent;
  header2 = CustomHeaderComponent2;
  constructor() {}
}
