console.log('home page...');

import { Blog } from "../components/Blog.js";
/* header start */
/* header end */

/* hero start */
/* hero end */

/* about me start */
/* about me end */

/*progress start*/
    import { Progress } from "../components/progress-bar-render.js";
import { blogsData } from "../data/blogsData.js";
    import { progressAboutData } from "../data/progressData.js";
    const prog = new Progress(progressAboutData);
    prog.renderProgressBars();
    
    let playOnce = true;
    function Play(){
        if(window.scrollY >= 1250 && playOnce)
        {
            prog.fillProgressBars();
            playOnce = false;
        }
    }
    window.addEventListener('scroll', Play);
/*progress end*/

/* services start */
/* services end */

/* blogs start */
    new Blog('#blog-slider', blogsData);
    /* Drag slider */

        const sliderBlock = document.querySelector('#blog-slider');
        const cardBlock = document.querySelectorAll('.card-blog');

        //console.log(cardBlock[0].clientWidth * cardBlock.length + (20 * cardBlock.length));
        let startPosX = 0;
        
        let isMouseDown = false;
        
        sliderBlock.addEventListener('mousedown', (e) =>{
            startPosX = e.clientX-128;
            isMouseDown = true;
        })
        sliderBlock.addEventListener('mouseup', () =>{
            isMouseDown = false;
        })
        sliderBlock.addEventListener('mouseout', () =>{
            isMouseDown = false;
        })

        sliderBlock.addEventListener('mousemove', (e) =>{
            if(isMouseDown){
                const endPosX = e.clientX-128;
                const posX = startPosX - endPosX;

                sliderBlock.scrollLeft = posX;
                
            }
        })

    /* Drag slider */
/* blogs end */