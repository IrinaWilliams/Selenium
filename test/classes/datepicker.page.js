import Page from './Page';

class DatePicker extends Page{
    open(){
        super.open('/datepicker');
        browser.pause(1000);
    }

    get datePickerTitle(){return $('h1')};
    get dateField(){return $('#placeholder')};
    get datePicker(){return $('div.datepicker-days')};
    get monthNext(){return $('th.next')};
    get currentMonth(){return $('th.datepicker-switch')};

}
export default new DatePicker();