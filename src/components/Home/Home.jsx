import React from "react";
import "./Home.css";

const Home = () => {

  return (
    <div className="home">
      <div className="home-head">
        <h1>Global Warming is Bad</h1>
        <h3>why is Global Warming bad?</h3>
        <h4>
            The the unfortunent truth is we have been killing our planet
            with little to no regulations on the emmisons of carbon,
            causing butterfly effects 
            i.e. increases in sever weather, Higher sea levels, dirty air like smog,
            melting antartica, and Ecosystem disruption.
          </h4>
        <img
          className="polar-bear"
          alt="a polar bear and their cub on a small chunk of ice"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12DF7/production/_113530377_bears_kt-miller.jpg"
        />
      </div>


      <div className="terminology">
        <div className="terminology-description">
          <h3>Relevant Terminology</h3>
          <div className="relevant-terms">
            The discussion around Global Warming can be overwhelming,
            if you dont know what the commonly used buzzwords are about it.
            Here is a short list of terms and description of what they mean:</div>
        </div>
        <div className="term">
          <b>Global Warming</b>
          : a gradual increase in the overall temperature of the earth's atmosphere
          generally attributed to the greenhouse effect
          caused by increased levels of carbon dioxide,
          chlorofluorocarbons, and other pollutants.
          (Oxford Languages)
        </div>
        <div className="term">
          <b>Greenhouse Gases</b>
          :
          Greenhouse Gases are gases in Earth's atmosphere that trap heat.
          They let sunlight pass through the atmosphere,
          but they prevent the heat that the sunlight brings from leaving the atmosphere.
          The main greenhouse gases are: Water vapor. Carbon dioxide.
        </div>
        <div className="term">
          <b>Carbon Footprint</b>
          : The amount of carbon dioxide and other carbon compounds emitted
          due to the consumption of fossil fuels by a particular person, group, etc.
        </div>
      </div>

      <div className="content">
        <div className="content-description">
          <h3>reading? boring!</h3>
          <div>I dont like reading either so I curated some videos from some Youtube videos that cover the Topic as well:</div>
        </div>
        <div className="videos">
          <div className="video-block">
            <h4>Bill Nye yelling at you</h4>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UjXxAVayBEY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="video-block">
            <h4>The Carbon Scaling Cassualy Explained (sponsored by Bill and Melinda Gates)</h4>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6Ljs9_yIiY0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="video-block">
            <h4>Can you fix Climate Change? by Kurzgesagt</h4>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yiw6_JakZFc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

      </div>

      <div className="resources">
        <h4>Resouces around the web</h4>
        <div className='web-links'>
          <a href="https://www.climatecommunication.org/climate/global-warming/">Climatecommunication.com</a>
          <a href="https://www.epa.gov/climate-change">United States Environmental Protection Agency</a>
          <a href="https://www.nrdc.org/stories/global-warming-101">Natural Resources Defense Council</a>
        </div>
      </div>
      <div className="space-taker-upper"></div>
    </div>
  )
}

export default Home;