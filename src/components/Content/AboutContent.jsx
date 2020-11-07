import React from 'react';
import Typography from '@material-ui/core/Typography';

const AboutContent = () => {

  return <div>
    <Typography variant="body2" component="p">
      After over 8 years of experience in retail leadership and management 
      I decided to change my career path and become a software engineer.
      I recently have complete an extensive immersion program that has molded me into an autonomous developer 
      with a large set of technical skills. I'm so thankful for that experience because it solidified my 
      interest in tech and helped me to build a community filled with amazing individuals who are
      who are genuinely invested in my success. My top soft skills are my cooperative 
      and resourceful nature which have afford me a great success over the years.
      I am proud of my accomplishments and my personal motivation is what helps me to achieve.
      I desire to be positive representation of how far resilience and determination can take you.
    </Typography>
    <Typography align="center" variant="h5" >
      Technical highlights
      </Typography>
    <Typography variant="body2" component="p">
      ~ Problem solving & debugging
      ~ Agile software development
      ~ Object-oriented programming languages
      ~ UX/UI design
      ~ Relational and NoSQL database management
      </Typography>
  </div>;
};

export default AboutContent;