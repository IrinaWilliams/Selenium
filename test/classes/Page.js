class Page {
    constructor (){
        this.title = "Formy";
    }

    open(path){
        browser.url(path);
    }

}
export default Page;