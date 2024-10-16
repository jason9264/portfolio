import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Scikit-learn",
    "Tensorflow",
    "Keras",
    "Pytorch",
    "Transformers",
    "NLTK",
    "spaCY",
    "SUMY"
];

const labelsSecond = [
    "R",
    "Linear Regression",
    "Logistic Regression",
    "ARIMA Modeling",
    "A/B Testing",
    "Bayesian Statistics",
    "SVM",
    "Naive Bayes",
    "Clustering",
    "Selenium",
];

const labelsThird = [
    "SQL",
    "PostgreSQL",
    "Snowflake",
    "Teradata",
    "AWS",
    "Dataiku",
    "Data Bricks"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Knowledge Areas</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Machine Learning</h3>
                    <p>My passion for machine learning began during my Master’s in Analytics. I was captivated by its ability to solve problems beyond traditional statistics by learning and using innovative approaches. </p> <p>I really believe that machine learning will bring cutting edge advancements, and help to improve quality of life around the world.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Statistics & Analysis</h3>
                    <p>My interest in statistics was sparked by Asimov’s Foundation, where a statistician predicts the future with data.</p> <p>Analyzing large datasets gives me a unique sense of fulfillment, and every new piece of knowledge enhances my skills, allowing me to really embrace being a “jack of all trades”.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Concepts:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Engineering</h3>
                    <p>I love data engineering for its big-picture perspective that merges structure and problem-solving, similar to cooking, where you consider the entire dish.</p> <p> It offers complexity and unqiue rewards by influencing all business areas, like preparing a well thought out meal.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;