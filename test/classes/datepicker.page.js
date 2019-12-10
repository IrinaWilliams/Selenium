import Page from './Page';

class DatePicker extends Page{
    open(){
        super.open('/datepicker');
        browser.pause(1000);
    }

    get datePickerTitle(){return $('h1')};
    get dateField(){return $('input#datepicker.form-control')};
    get datePicker(){return $('div.datepicker-days')};
    get currMonthTitle(){return $('.datepicker-title')}
    get monthNext(){return $('th.next')};
    get getCurrentMonth(){return $('th.datepicker-switch')};

}
export default new DatePicker();