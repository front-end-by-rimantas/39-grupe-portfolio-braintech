console.log('home page...');

/* header start */
/* header end */

/* hero start */
/* hero end */

/* about me start */
/* about me end */

/*progress start*/
    import { Progress } from "../components/progress-bar-render.js";
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