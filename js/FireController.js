class FireController {

    constructor(sourceCreator, processor, pencil){
        this.sourceCreator = sourceCreator;
        this.processor = processor;
        this.pencil = pencil;

        this.isFireOn = false;

        this.fireStages = [
            {
                sourceFireBrightness: 22,
                intensity: 5
            },
            {
                sourceFireBrightness: 28,
                intensity: 4
            },
            {
                sourceFireBrightness: 33,
                intensity: 3
            },
            {
                sourceFireBrightness: 36,
                intensity: 2
            }
        ];

        this.actualFireStage = this.fireStages.length - 1;
    }

    lightTheFire(){
        this.sourceCreator.do();
        this.isFireOn = true;
    }

    putOutTheFire(){
        this.sourceCreator.undo();
        this.isFireOn = false;
    }

    setPencilWidth(input){
        const width = parseInt(input.value);
        this.pencil.pencilWidth = width;
    }

    toogleWindDirection(){
        this.processor.windDirection = this.processor.windDirection === 'right' ? 'left' : 'right'; 
    }

    decreaseFireStage() {
        if(this.actualFireStage < this.fireStages.length - 1) this.actualFireStage += 1;
        this.updateFireStage();
    }

    increaseFireStage() {
        if(this.actualFireStage > 0) this.actualFireStage -= 1;
        this.updateFireStage();
    }

    minFireStage() {
        this.actualFireStage = 0;
        this.updateFireStage();
    }

    maxFireStage() {
        this.actualFireStage = this.fireStages.length - 1;
        this.updateFireStage();
    }

    updateFireStage() {
        const actualFireStageObj = this.fireStages[this.actualFireStage];
        this.sourceCreator.sourceFireBrightness = actualFireStageObj.sourceFireBrightness;
        this.pencil.pencilBaseColor = actualFireStageObj.sourceFireBrightness;
        this.processor.intensity = actualFireStageObj.intensity;

        this.sourceCreator.do();
    }

}