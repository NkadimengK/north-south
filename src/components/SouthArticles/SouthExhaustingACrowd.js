import React from "react";
import { Link } from "react-router-dom";
import blogCSS from "../allblogStyle.module.css";

import art from "../images/Crowd2.PNG";

function SouthExhaustingACrowd({SetSouthArticle}){
  return (
    <div className={blogCSS.mainContainer}>
      <h1 className={blogCSS.regularHomeButton} onClick = {()=>{ {SetSouthArticle(0)}}}>
        <Link to="#">South</Link>
      </h1>

      <div className={blogCSS.ScrollButtons}>
              <div className={blogCSS.backButton} onClick = {()=>{ {SetSouthArticle(0)}}} >
              </div>

          </div>    
      
      <div className={blogCSS.restOfNavButtons}></div>

      <div className={blogCSS.color}></div>

      <div className={blogCSS.articleBackground}>
        <div className={blogCSS.container}>
          <h1 className={blogCSS.pageHeadings}>Analysis of Exhausting a Crowd</h1>
          <br></br>
            <img src={art} width="100%" alt="Exhausting a Crowd in the Netherlands"></img>
            <br></br>

            <em>Exhausting a Crowd in the Netherlands</em>
            <br></br>
          
            <p>By Khutso Nkadimeng, 07 Oct 2021</p>
            <br></br>

            <p>I am a believer in the idea that, in general, there are no socio-political solutions; there are only trade-offs. Walking around the streets of Braamfontein, I have never really felt safe, and I keep asking myself, what would I give up in exchange for security. Am I willing to give up some of my freedoms to state surveillance machinery in hopes of neutralising the criminal element roaming the streets with such ease? But this is where the nuance lies. Authorities do not ask for our willingness to be monitored; they just do it. Exhausting a Crowd is a reminder of that reality.</p>
            
            <p>Judging by the camera positioning and location, scenes from Exhausting a Crowd would be classified as untargeted and ethically questionable public surveillance. South Africa introduced mass surveillance through the Regulation of Interception of Communications and Provision of Communication Related Information Act, or RICA, after the September 11 attacks in the United States (Duncan 2021). Such programs begin as reasonable measures for public safety. But individuals could be targeted. The South African state used its surveillance apparatus to spy on Sam Sole, an investigative journalist and his source in the National Prosecuting Authority (Duncan 2021), demonstrating just how vulnerable the system is to abuse.</p>
            
            <p>In Exhausting a Crowd footage, users can use tags and comment on individuals and other street objects. The messages are innocent and sometimes funny. But it is not difficult to imagine how a surveillance state could use such features to profile people. Members of the public could be forced to tag the undesirable behaviour of individuals in public. The tags could then be used to punish or reward behaviour. Such an undertaking has already begun in China with its one of a kind social credit system that allows unprecedented collection and classification of data by businesses and government to form individual profiles (Kobie 2019).</p>
          
            <p>The coronavirus pandemic turned the entire world into the streets of Braamfontein. Nobody felt safe. People willingly and understandably supplied governments with the means to expand mass surveillance capabilities. A government not monitoring its citizen’s movements would be labelled as careless. But similar to how Exhausting a Crowd is still up years after it was commissioned, researchers predict that surveillance practices of the pandemic will continue even after the virus is contained (Swart 2021). </p>
           
          
            <h2>References </h2>
            <ol>
                <li> Duncan, J. 2021. <a href="https://aboutintel.eu/south-africa-surveillance-ruling/" target="blank">The global significance of South Africa’s mass surveillance ruling.</a></li>
                <li> Kobie, N. 2021. <a href="https://www.wired.co.uk/article/china-social-credit-system-explained" target="blank">The complicated truth about China’s social credit system.</a></li>
                <li> Swart, H. 2021. <a href="https://www.dailymaverick.co.za/article/2021-09-06-hello-this-is-your-government-speaking-rise-of-global-surveillance-practices-during-covid-has-insights-for-south-africa/" target="blank"> Hello, this is your government speaking: Rise of global surveillance practices during Covid has insights for South Africa.</a></li>

            </ol>

        </div>
      </div>
    </div>
  );
}

export default SouthExhaustingACrowd;