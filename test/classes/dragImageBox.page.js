import Page from './Page';

class DragIntoBox extends Page{
    open(){
        super.open('/dragdrop');
    }
    get dragTitle(){return $('h1')}
    get dragImage(){return $('#image')}
    get imageBox(){return $('#box')}

    TitleText(){
        this.dragTitle.getText();
    }
    
}
export default new DragIntoBox();