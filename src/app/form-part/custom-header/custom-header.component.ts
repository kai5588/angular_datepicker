import {
  ChangeDetectionStrategy,ChangeDetectorRef,Component,Inject,OnDestroy,
} from "@angular/core";
import { MatCalendar } from "@angular/material/datepicker";
import {
  DateAdapter,MAT_DATE_FORMATS,MatDateFormats,
} from "@angular/material/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomHeaderComponent implements OnDestroy {
  private _destroyed = new Subject<void>();

  constructor(
    private _calendar: MatCalendar<any>,
    private _dateAdapter: DateAdapter<any>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef
  ) {
    _calendar.stateChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => cdr.markForCheck());
    _dateAdapter.setLocale("ja"); //日本語にする
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  get periodLabel() { // 選択中の月を返す
    return this._dateAdapter
      .format(
        this._calendar.activeDate,
        this._dateFormats.display.monthYearLabel
      )
      .toLocaleUpperCase();
  }

  previousClicked(mode: any) { // 前の月を表示
    this._calendar.activeDate = this._dateAdapter.addCalendarMonths(
      this._calendar.activeDate,
      -1
    );
  }

  nextClicked(mode: any) { // 次の月を表示
    this._calendar.activeDate = this._dateAdapter.addCalendarMonths(
      this._calendar.activeDate,
      1
    );
  }
}

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomHeaderComponent2 implements OnDestroy {
  private _destroyed = new Subject<void>();

  constructor(
    private _calendar: MatCalendar<any>,
    private _dateAdapter: DateAdapter<any>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef
  ) {
    _calendar.stateChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => cdr.markForCheck());
    _dateAdapter.setLocale("ja"); //日本語にする
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  get periodLabel() { // 選択中の月を返す
    return this._dateAdapter
      .format(
        this._calendar.activeDate,
        this._dateFormats.display.dateInput
      )
      .toLocaleUpperCase();
  }

  previousClicked(mode: any) { // 前の月を表示
    this._calendar.activeDate = this._dateAdapter.addCalendarMonths(
      this._calendar.activeDate,
      -1
    );
  }

  nextClicked(mode: any) { // 次の月を表示
    this._calendar.activeDate = this._dateAdapter.addCalendarMonths(
      this._calendar.activeDate,
      1
    );
  }
}
