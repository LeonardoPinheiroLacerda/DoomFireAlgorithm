class FireController {

    constructor(sourceCreator, processor, pencil){
        this.sourceCreator = sourceCreator;
        this.processor = processor;
        this.pencil = pencil;

        this.isFireOn = false;
    }

    lightTheFire(){
        this.sourceCreator.do();
        console.log("ligou")
        this.isFireOn = true;
    }

    putOutTheFire(){
        this.sourceCreator.undo();
        console.log("apagou")
        this.isFireOn = false;
    }

}