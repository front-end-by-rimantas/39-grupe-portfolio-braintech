class Progress{
    constructor(progressData){
        this.progressData = progressData;
    }

    renderProgressBars(){
        let DOMHtml = document.querySelector('.progress-section-para')
        for(let i=0;i<this.progressData.length;i++)
        {
            const htmlBlock = `<div class="progress-block">
                                    <div class="progress-info">
                                    <p>${this.progressData[i]['tag']}</p>
                                    <p>${this.progressData[i]['value']}</p>
                                    </div>
                                    <div class="progress-bg">
                                    <div class="progress-value" style="background-color:${this.progressData[i]['valueColor']}; width:0;">
                                        
                                    </div>
                                    </div>
                                </div>`
            DOMHtml.innerHTML += htmlBlock;
        }
    }

    fillProgressBars(){
        const htmlValueBlock = document.querySelectorAll('.progress-value');
        let i = 0;
        for(const element of htmlValueBlock)
        {
            element.style.width = this.progressData[i]['value'];
            element.style.transition = 'all 5s';     
            i++;
        }
        console.log('Playing');
    }
}

export { Progress }