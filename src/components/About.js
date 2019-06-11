import React from 'react';

import '../styles/about.scss';
import adrian from '../assets/images/adriands.png';
import IconButton from '@material-ui/core/IconButton';
import SmartphoneIcon from '@material-ui/icons/Smartphone'
import EmailIcon from '@material-ui/icons/Email'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import githubLogo from '../assets/images/github_blue.svg';
import cv from '../assets/Resume_AdrianDeSouza-min.pdf'

function About() {

  return (
    <div className="about">
      <div className="contact">
        <img src={adrian} className="profile" alt="profile picture"/>
        <IconButton>
          <a href="tel:0721568027" target="_blank">
            <SmartphoneIcon />
            0721568027
          </a>
        </IconButton>
        <IconButton>
          <a href="mailto:adriandesouza1@gmail.com" target="_blank">
            <EmailIcon />
            adriandesouza1@gmail.com
          </a>
        </IconButton>
        <IconButton>
          <a href="https://github.com/acenyte" target="_blank">
            <img src={githubLogo}/>
            Acenyte
          </a>
        </IconButton>
        <IconButton>
          <a href={cv} target="_blank">
            <CloudDownloadIcon />
            Download Resumé
          </a>
        </IconButton>
      </div>
      <div className="bio">
        <h2>Hello...</h2>
        <em>I turn dreams into code.
          Developing web applications from sunny South Africa since 2014, 
          being a nerd so entrepreneurs and creative agencies don't have to.  
        </em>
        <br>
          </br>
          <br>
          </br>
        <p>
          Specializing in front-end technology while coming from a multimedia design background, 
          I am able to provide my clients with both a creative and relevant solution to bring
          their product/service online.
          <br></br>
          <br></br>
          <br>
          </br>
          My Process:<br></br>
          <b>Consult &mdash; </b> establish my clients business requirements and clarify I am able
            to assist.
            <br>
            </br>
            <br>
          </br>
          <b>Implement &mdash; </b> code the solution and frequently test with stake-holders to ensure quality.
          If needed, collaborate with other specialists during production.
          <br>
          </br>
          <br>
          </br>
          <b>Optimize &mdash; </b> identify business and technical improvements and re-consult.   
          <br>
          </br>
          <br>
          </br>
          If you think I would be a suitable fit for your next project, please get in touch.
        </p>
        <br>
          </br>
          <br>
          </br>
      </div>
    </div>
  )
}
export default About;