class Blog{
    constructor(selector, data){
        this.selector = selector;
        this.data = data;

        this.init();
    }

    init(){
        this.renderBlog();
    }

    renderBlog(){
        const structure = document.querySelector(this.selector);
        let HTML = '';
        for(let i = 0;i<3;i++){
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
}

export { Blog }