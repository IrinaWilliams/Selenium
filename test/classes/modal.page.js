import Page from './Page';

class ModalPage extends Page {
    open(){
        super.open('/modal');
        browser.pause(1000);
    }

    get pageName(){return $('h1')}
    get openModalButton(){return $('#modal-button')}
    get modalTitle(){return $('#exampleModalLabel')}
    get closeButton(){return $('#close-button')}
    get okButton(){return $('#ok-button')}
    get crossCloseButton(){return $('.close')}

    

    setOpenModal(){
        this.openModalButton.click();
    }
    setCloseClick(){
        this.closeButton.click();
    }
    setOkClick(){
        this.okButton.click();
    }
    setCrossClick(){
        this.crossCloseButton.click();
    }

}
export default new ModalPage();