class ProgressBar{
    constructor(progressData, selector1, selector2){
        this.progressData = progressData;
        this.selector1 = selector1;
        this.selector2 = selector2;
        
        this.init();
    }

    // Validations

    init(){
        if(!this.isSelectorValid()
        || !this.isDataValid())
            return false;
        this.renderProgressBar();
    }

    isSelectorValid(){
        if(typeof this.selector1 !== 'string' 
        || typeof this.selector2 !== 'string' 
        || this.selector1.trim() === '' 
        || this.selector2.trim() === ''){
            return false;
        }
        return true;
    }

    isDataValid(){
        if(typeof this.progressData !== 'object' 
        || !Array.isArray(this.progressData) 
        || this.progressData === null ){
            return false;
        }
        return true;
    }

    // Functions

    renderProgressBar(){
        let DOMhtml = document.querySelector(this.selector1)
        let finalhtmlBlock = '';
        for(const progressElement of this.progressData){
            const htmlBlock = `<div class="progress-block">
                                    <div class="progress-info">
                                    <p>${progressElement.tag}</p>
                                    <p>${progressElement.value}</p>
                                    </div>
                                    <div class="progress-bg">
                                    <div class="progress-value" style="background-color:${progressElement.valueColor}; width:0;">
                                        
                                    </div>
                                    </div>
                                </div>`
            finalhtmlBlock += htmlBlock;
        }
        DOMhtml.innerHTML = finalhtmlBlock;
    }

    fillProgressBar(){
        const htmlValueBlock = document.querySelectorAll(this.selector2);
        let i = 0;

        for(const element of htmlValueBlock){
            const progress = this.progressData[i++];
            element.style.width = progress.value;
            element.style.transition = 'width 3s';
        }   
    }
}

export { ProgressBar }