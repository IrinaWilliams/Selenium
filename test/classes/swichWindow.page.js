import Page from './Page';

class SwitchWindow extends Page {

    open(){
        super.open('/switch-window')
        browser.pause(1000);
    }

    get pageName(){return $('h1')}
    get openTab(){return $('#new-tab-button')}
    //get openAlert(){return $('#alert-button')}
    get openAlert(){return $('button#alert-button.btn.btn-primary')}

    

}

export default new SwitchWindow;