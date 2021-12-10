import React from "react";
import { Link } from "react-router-dom";
import blogCSS from "../allblogStyle.module.css";

import art from "../images/global-internet.jpg";

function GlobalInternet({SetArticle}){
  return (
    <div className={blogCSS.mainContainer}>
      <h1 className={blogCSS.regularHomeButton} onClick = {()=>{ {SetArticle(0)}}}>
        <Link to="#">North</Link>
      </h1>

      <div className={blogCSS.ScrollButtons}>
              <div className={blogCSS.backButton} onClick = {()=>{ {SetArticle(0)}}} >
              </div>

          </div>    
      
      <div className={blogCSS.restOfNavButtons}></div>

      <div className={blogCSS.color}></div>

      <div className={blogCSS.articleBackground}>
        <div className={blogCSS.container}>
          <h1 className={blogCSS.pageHeadings}>The Need for Global Internet Connection -A close Reading</h1>
          <br></br>
            <img src={art} width="100%" alt="global internet picture"></img>
            <br></br>

            <em>A connected world - Pixabay</em>
            <br></br>
          
            <p>By Khutso Nkadimeng, 07 Oct 2021</p>
            <br></br>

            <p>For years the internet was seen as the solution to all problems the world faced due to physical, socio-political, and cultural barriers. True democracy was on the horizon. Free access to education offered by some of the world’s best educators. Free access to global markets for anyone anywhere on earth. In the internet world, the only limitation people would have to contend with would be themselves. But the internet had a far easier idea, to simply retrace inequalities of the past.</p>
            
            <p>According to Claire Daniolou there is only about 59% of the global population with internet access as of 2020 (Daniolou 2020). A further breakdown by UNESCO shows that “in the developed world, 87% are connected compared with 47% in developing nations, and just 19% in the least developed countries.” (Broom 2020) The historical parallels are not just international trends. Numbers from Stats SA 2019 report showed Gauteng, the wealthiest province in South Africa with the highest internet penetration at 72.2% and Limpopo with only 42.4% of its population online (Stats SA 2019).</p>
            
            <strong>Effects</strong>

            <p>The differences in online presence result in greater inequality because, unlike Gauteng, a place like Limpopo will most likely “have larger populations with lower levels of educational attainment, lower-income, and more restricted access to healthcare and travel services”. (Daniolou 2020) In 2020, Ndlovu Youth Choir made many South Africans proud by reaching the finals of America’s Got Talent. The choir comes from a few kilometres away from my village, but I had to discover them with the rest of the world. These were supposed to be YouTube stars around the community, but digital isolation prevents such unique cultural products from flourishing, as Daniolou has correctly identified. </p>

            <strong>Action</strong>
          
            <p>Many originations, governments and businesses are working on solutions to bring broadband connectivity to rural areas (Daniolou 2020). I am particularly inspired by stories such as the one from Mankosi village in Eastern Cape. The University of Western Cape helped community members build an Internet Service Provider themselves, the first of its kind in South Africa, named Zenzele Network Providers – Zenzele means “do it yourself” in isiXhosa (Sikhakhane 2017). Help may or may not come, but those of us who are affected by issues must try solving them ourselves however we can. </p>

            <strong>Results</strong>
           
            <p>Zenzele Network Providers is now an established business, and community members buy vouchers to access the network at prices way below the national average. R30 will get you uncapped internet for a month. The opportunities for Mankosi residences are endless. The is no flaw in Daniolou statement that the internet “plays an imperative role in the business world” (Daniolou 2020).</p>

            <strong>Dangers</strong>

            <p>There is no doubt that “Online information can be misleading, so without a critical thinking, parts of the digital population can be manipulated” (Daniolou 2020). Some cases are nothing if not extraordinary. When Coronavirus began ravaging the world in 2020, people believed fake news linking the virus to 5G technology (Fransman 2021). But that was not a good enough leap; they went as far as attacking telecommunication towers. It is through education that such issues may be avoided. </p>
          
            <h2>References </h2>

            <ol>
                <li> Daniolou, C. 2020. <a href="https://www.internetjustsociety.org/the-need-for-global-internet-connectivity" target="blank">Institute for Internet and the Just Society:  Digital Divide Widens.</a></li>
                
                <li> Broom, D. 2020.  <a href="https://www.weforum.org/agenda/2020/04/coronavirus-covid-19-pandemic-digital-divide-internet-data-broadband-mobbile/" target="blank"> Coronavirus has exposed the digital divide like never before.</a></li>
               
                <li> Stats SA. 2019. <a href="http://www.statssa.gov.za/publications/P0318/P03182016.pdf" target="blank">STATISTICAL RELEASE P0318</a></li>
               
                <li> Sikhakhane, J. 2017. <a href="https://theconversation.com/how-a-rural-community-built-south-africas-first-isp-owned-and-run-by-a-cooperative-87448" target="blank">How a rural community built South Africa’s first ISP owned and run by a cooperative</a></li>
               
                <li> Fransman, F. 2021. <a href="https://www.news24.com/news24/columnists/guestcolumn/opinion-the-5g-effect-and-covid-conspiracies-why-these-notions-must-be-dispelled-20210408" target="blank">The 5G effect and Covid conspiracies: Why these notions must be dispelled</a></li>
    
            </ol>

        </div>
      </div>
    </div>
  );
}

export default GlobalInternet;