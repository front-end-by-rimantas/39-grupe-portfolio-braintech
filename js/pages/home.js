import { ProgressBar } from "../components/ProgressBar.js";
import { progressAboutData } from "../data/progressData.js";

console.log('home page...');

/* header start */
/* header end */

/* hero start */
/* hero end */

/* about me start */
/* about me end */

/*progress start*/
    const prog = new ProgressBar(progressAboutData, '#progress-section-para', '.progress-value');

    let playOnce = true;
    
    function PlayProgressFill(){
        if(window.scrollY >= 1000 && playOnce)
        {
            prog.fillProgressBar();
            playOnce = false;
        }
    }
    
    window.addEventListener('pageshow', PlayProgressFill);
    window.addEventListener('scroll', PlayProgressFill);
/*progress end*/

/* services start */
/* services end */