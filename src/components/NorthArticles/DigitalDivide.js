import React from "react";
import { Link } from "react-router-dom";
import blogCSS from "../allblogStyle.module.css";

import tower from "../images/tower.jpeg";

function DigitalDivide({SetArticle}) {
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
          <h1 className={blogCSS.pageHeadings}>
            Digital Divide Widens: A Close Read
          </h1>
          <br></br>

          <img
            src={tower}
            width="100%"
            alt="an image of a telephone tower"
          ></img>
          <br></br>
          <em>Telephopne tower - Pixabay</em>
          <br></br>
          <br></br>

          <p>By Khutso Nkadimeng, 25 Sep 2021</p>
          <br></br>
          <br></br>
          <p>
            In 2020, bustling cities known for non-stop economic activities came
            to a sudden shutdown due to the Covid-19 pandemic. Areas notorious
            for traffic congestions were now empty and those noise making cars
            disappeared with the livelihoods of those who made a living through
            servicing the city dwellers. Just like any organism fighting for
            survival, cities did not simply give up their circulatory system.
            They moved it underground. Traffic disappeared from the road and
            peaked up on faster highways in the form of fibre optics. In that
            process of changing lanes, existing but often hidden disparities
            were exposed, and the inequities of our world found a new way of
            self-expression through digital technology.
          </p>

          <p>
            When schools were transitioning to e-learning in South Africa, an
            estimated{" "}
            <a
              href="https://www.globalcitizen.org/en/content/south-africa-children-school-drop-out-covid-19/"
              target="blank"
            >
              750 000 students
            </a>{" "}
            dropped out due to the lack of resources required for distance
            learning. Data costs and access to hardware are the two leading
            factors widening the digital gab{" "}
            <a
              href="https://www.globalcitizen.org/en/content/south-africa-digital-divide-makes-inequality-worse/#:~:text=According%20to%20Dudu%20Mkhwanazi%20of,exacerbating%20inequality%20in%20the%20country."
              target="blank"
            >
              (Mlaba 2021)
            </a>
            . This is not just a South African problem. According to UNESCO, 830
            million students around the world do not have access to computers.
            And in Africa, 40% of students do not have internet access at home.
            In Sub-Saharan Africa, 82% of students are “unable to go online”{" "}
            <a
              href="https://www.internetjustsociety.org/digital-divide-widens"
              target="blank"
            >
              (Takaki and Glynos 2020)
            </a>
            . Looking at these numbers, it is easy to see how the digital divide
            will lead to a more unequal society.
          </p>

          <p>
            Less privileged students were not the only ones disadvantaged by
            daily activities moving online. Underprivileged workers were
            affected too{" "}
            <a
              href="https://www.internetjustsociety.org/digital-divide-widens"
              target="blank"
            >
              (Takaki and Glynos 2020)
            </a>
            . Research by the Wits School of Governance found that “one in every
            two jobs lost as a result of Covid-19’s economic onslaught was once
            held by an informal worker”{" "}
            <a
              href="https://mg.co.za/business/2021-05-08-covid-kills-a-decade-of-employment-growth-in-sa/"
              target="blank"
            >
              (Smit 2021)
            </a>
            . The informal sector accounted for about 28% of all employment
            before the pandemic, but represented 50% of all job losses, making
            it the hardest hit{" "}
            <a
              href="https://mg.co.za/business/2021-05-08-covid-kills-a-decade-of-employment-growth-in-sa/"
              target="blank"
            >
              (Smit 2021)
            </a>
            . Teleworking is only an option for high-income earners who can
            continue doing office work remotely using technology{" "}
            <a
              href="https://www.internetjustsociety.org/digital-divide-widens"
              target="blank"
            >
              (Takaki and Glynos 2020)
            </a>
            .{" "}
          </p>

          <p>
            What we are seeing is a vicious cycle. Effective reproduction of
            inequality. Parents who barely made ends meet find themselves out of
            jobs. Their children trying to acquire education to better the
            family’s circumstances drop out of school because their parents
            cannot afford to put them online. Even if the family tried, in South
            Africa data costs in non-affluent areas are 80 times more expensive.
            Only a privileged few in affluent homes have access to fixed
            affordable internet{" "}
            <a
              href="https://www.sabcnews.com/sabcnews/digital-divide-will-isolate-poor-south-africans-from-4th-industrial-revolution/"
              target="blank"
            >
              (Mabena 2019)
            </a>
            . This poor state of affairs echoes Khanyi Mlaba{" "}
            <a
              href="https://www.globalcitizen.org/en/content/south-africa-digital-divide-makes-inequality-worse/#:~:text=According%20to%20Dudu%20Mkhwanazi%20of,exacerbating%20inequality%20in%20the%20country."
              target="blank"
            >
              (2021)
            </a>
            , that the digital divide is “having a negative impact on two of the
            country’s best chances at development and equality, those being
            access to education and access to employment opportunities”.
          </p>

          <p>
            What can be done? The efforts of bridging the gap must continue even
            after the pandemic is over. I agree with Maria Tataki and Dimitris
            Glynos{" "}
            <a
              href="https://www.internetjustsociety.org/digital-divide-widens"
              target="blank"
            >
              (2020)
            </a>{" "}
            that “providing everyone access to digital infrastructure should
            constitute our priority”. The UK government lent laptops to students
            and Thailand “has created a scheme of 10 free gigabytes of data
            usage for mobile users”{" "}
            <a
              href="https://www.internetjustsociety.org/digital-divide-widens"
              target="blank"
            >
              (Takaki and Glynos 2020)
            </a>
            . Similar efforts were undertaken here in South Africa. The
            government through the National Student Financial Aid Scheme is
            distributing laptops to students{" "}
            <a
              href="https://www.sabcnews.com/sabcnews/higher-education-to-distribute-50-000-laptops-to-nsfas-funded-students/"
              target="blank"
            >
              (Chetty 2021)
            </a>
            . In 2020 universities such as Wits started their initiatives of
            givinglaptops to students{" "}
            <a
              href="https://www.wits.ac.za/news/latest-news/general-news/2020/2020-06/wits-thanks-sa-post-office-for-delivering-laptops-to-students.html#:~:text=The%20Speed%20Services%20Courier%20Unit,continue%20with%20their%20studies%20online."
              target="blank"
            >
              (University of the Witwatersrand)
            </a>
            . I was personally receiving 30 (10 daily and 20 night-time)
            gigabytes as part of a deal negotiated with telecommunication
            service providers. I have also received such assistance from my
            lecturers and their families (thank you Hanli), and I believe these
            are the kind of efforts capable of bridging the digital gap. Through
            government, business and people who care.
          </p>
          <br></br>
          <br></br>
          <h2>References </h2>
          <ol>
            <li>
              {" "}
              Tataki, M. and Glynos, D. 2020.{" "}
              <a
                href="https://www.internetjustsociety.org/digital-divide-widens"
                target="blank"
              >
                Institute for Internet and the Just Society: Digital Divide
                Widens.
              </a>
            </li>
            <li>
              Mlaba, K. 2021.{" "}
              <a
                href="https://www.globalcitizen.org/en/content/south-africa-digital-divide-makes-inequality-worse/#:~:text=According%20to%20Dudu%20Mkhwanazi%20of,exacerbating%20inequality%20in%20the%20country."
                target="blank"
              >
                Global Citizen How Is South Africa's Digital Divide Making
                Inequality Worse in the Country?
              </a>
            </li>
            <li>
              Smit, S. 2021.{" "}
              <a
                href="https://mg.co.za/business/2021-05-08-covid-kills-a-decade-of-employment-growth-in-sa/"
                target="blank"
              >
                Mail and Guardian: Covid kills a decade of employment growth in
                SA
              </a>
            </li>
            <li>
              Mabena, N. 2019.{" "}
              <a
                href="https://www.sabcnews.com/sabcnews/digital-divide-will-isolate-poor-south-africans-from-4th-industrial-revolution/"
                target="blank"
              >
                SABC News: ‘Digital divide will isolate poor South Africans from
                4th Industrial Revolution
              </a>
            </li>
            <li>
              Chetty, S. 2021.{" "}
              <a
                href="https://www.sabcnews.com/sabcnews/higher-education-to-distribute-50-000-laptops-to-nsfas-funded-students/"
                target="blank"
              >
                SABC News: Higher Education to distribute 50 000 laptops to
                NSFAS-funded students
              </a>
            </li>
            <li>
              The University of the Witwatersrand. 2020.{" "}
              <a
                href="https://www.wits.ac.za/news/latest-news/general-news/2020/2020-06/wits-thanks-sa-post-office-for-delivering-laptops-to-students.html#:~:text=The%20Speed%20Services%20Courier%20Unit,continue%20with%20their%20studies%20online."
                target="blank"
              >
                University of the Witwatersrand: Wits thanks SA Post Office for
                delivering laptops to students
              </a>{" "}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default DigitalDivide;
