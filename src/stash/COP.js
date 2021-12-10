import React from 'react';
import './COP.css';
import world from './world.png';
import FP_pic from './FP_pic.jpg';
import UN_news from './UN News.jpg';
import NYT_pic from './NYT_pic.jpg';


export default function COP() {
    return (
<div className="homePageBody" style={{backgroundColor: "#416270"}}>
<img class="world" src={world} alt="Picture of the world."/>
<p class="quote">"Your actions matter. No action or voice is too small to make a difference."</p>
<p class="author"> -Vanessa Nakate <br/>Ugandan Climate Activist</p>
<h2 id="topStories">Top Stories</h2>
<table id="news" style={{width: "25%"}}>
    <tr>
        <td><a href="https://foreignpolicy.com/2021/12/06/1-7-billion-pledge-indigenous-groups-cop26-climate-funding/"><img class="FP" src={FP_pic} alt="FP picture"/></a></td>
        <td><a href="https://foreignpolicy.com/2021/12/06/1-7-billion-pledge-indigenous-groups-cop26-climate-funding/">Will a Billion-Dollar Indigenous Climate Pledge Pay Off?</a>
            <p>December 6, 2021</p></td>
    </tr>
    <tr>
        <td><a href="https://news.un.org/en/story/2021/12/1107112" target="_blank"><img class="UN" src={UN_news} alt="UN picture"/></a></td>
        <td><a href="https://news.un.org/en/story/2021/12/1107112" target="_blank">COP26: Convert climate ‘promises to action’, urge UN rights experts</a>
            <p>December 3, 2021</p></td>
    </tr>
    <tr>
        <td><a href="https://www.nytimes.com/2021/11/13/climate/cop26-climate-summit-takeaways.html" target="_blank"><img class="NYT" src={NYT_pic} alt="NYT picture"/></a></td>
        <td><a href="https://www.nytimes.com/2021/11/13/climate/cop26-climate-summit-takeaways.html" target="_blank">6 Takeaways From the U.N. Climate Conference</a>
        <p>November 13, 2021</p></td>
    </tr>

</table>

</div>
    );
};
