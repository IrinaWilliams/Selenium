import Page from './Page';

class SwitchWindow extends Page {

    open(){
        super.open('/switch-window')
        browser.pause(1000);
    }

    get pageName(){return $('h1')}
    get openTab(){return $('#new-tab-button')}
    get openAlert(){return $('#alert-button')}

    

}

export default new SwitchWindow;