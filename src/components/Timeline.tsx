import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Learning Journey</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning & AI Practicum</h3>
            <h4 className="vertical-timeline-element-subtitle">Cymantix - Raleigh, NC</h4>
            <p>
            NLP, Transformer Models, Word Embeddings, Sentiment Analysis, Named Entity Recognition, Text Classification, Topic Modeling.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">M.S. Candidate in Analytics</h3>
            <h4 className="vertical-timeline-element-subtitle">Institute for Advanced Analytics - Raleigh, NC</h4>
            <p>
            Deep Learning, Linear & Logistic Regression, Time Series, Bayesian Statistics, Simulation and Risk, Fraud Detection.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Business Insights Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Nationwide - Columbus, OH</h4>
            <p>
              Automation, Snowflake, Teradata, SQL Server, Dataiku, Data Bricks, Data Robot, Python, Tableau.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Syneos Health - Morrisville, NC</h4>
            <p>
              Python, Azure, AWS, Microsoft Power Platform, R Shiny, Power BI.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Manager Intern Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Syneos Health - Morrisville, NC</h4>
            <p>
              Jira, Microsoft Project, Asana, Monitoring and Reporting, Budget Management.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">ERP Product Specialist Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Prometheus Group - Raleigh, NC</h4>
            <p>
              SAP, ERP, RFPs, RFIs, SOWs, and Customer Experience.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        
      </div>
    </div>
  );
}

export default Timeline;