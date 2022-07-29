class Blog{
    constructor(selector, data){
        this.selector = selector;
        this.data = data;

        this.init();
    }

    init(){
        this.renderBlog();

        //Disabled since to buggy
        //this.detectDragSlide();
    }

    renderBlog(){
        const structure = document.querySelector(this.selector);
        let HTML = '';
        for(let i = 0;i<this.data.length;i++){
            const singleData = this.data[i];
            const blogBlock = `<div class="card-blog">
                                    <img src="./assets/images/${singleData.img}" alt="No">
                                    <p class="topic">${singleData.topic}</p>
                                    <div class="card-info">
                                        <div class="time-role">
                                            <i class="fa-regular fa-calendar-check icon"></i>
                                            <p class="time">${singleData.date}</p>
                                            <i class="fa-regular fa-user icon"></i>
                                            <p class="role">${singleData.role}</p>
                                        </div>
                                        <h1>${singleData.descriptionTitle}</h1>
                                        <p class="description">
                                            ${singleData.description}
                                        </p>
                                        <a href="#" target="_blank">Learn more</a>
                                        <i class="fa-solid fa-angle-right arrow-right icon"></i>
                                    </div>
                               </div>`;
            HTML += blogBlock;
        }
        structure.innerHTML = HTML;
    }

    //Replaces scroll with drag method
    /*
    detectDragSlide(){
        const sliderBlock = document.querySelector('#blog-slider');
        let pos = { top: 0, left: 0, x: 0, y: 0 };
        //console.log(cardBlock[0].clientWidth * cardBlock.length + (20 * cardBlock.length));
        
        let isMouseDown = false;
        
        sliderBlock.addEventListener('mousedown', (e) =>{
            pos = {
                left: sliderBlock.scrollLeft,
                top: sliderBlock.scrollTop,
                // Get the current mouse position
                x: e.clientX,
                y: e.clientY,
            };
            isMouseDown = true;
        })
        sliderBlock.addEventListener('mouseup', () =>{
            isMouseDown = false;
        })

        sliderBlock.addEventListener('mousemove', (e) =>{
            if(isMouseDown){
                const dx = e.clientX - pos.x;
                sliderBlock.scrollLeft = pos.left - dx;         
            }
        })
    }
    */
}

export { Blog }