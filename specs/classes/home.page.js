import Page from "./Page";

class HomePage extends Page {
    open(){
        super.open('/');
        browser.pause(1000);
    }
    get h1(){
        return $('h1');
    }
    get keyAndMouse(){
        return $('li>a[href^="/keypress"]');
    }

    // getTitle(){
    //     this.keyAndMouse.getText();
    // }
}

export default new HomePage;