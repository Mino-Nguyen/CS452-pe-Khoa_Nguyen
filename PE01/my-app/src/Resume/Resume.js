import React from 'react';
import './Resume.css';

function Resume() {
    return (
        <div className="resume-container">
            <h1>Khoa Nguyen</h1>
            <h5>1234 Street, Town, Country, 12345 | (123)456-7890 | <br /> myemail@schoolemail.com</h5>
            <h2>Education</h2>
            <h3>Master of Science in Computer Science</h3>
            <p>University of XYZ, Anytown USA | May 2023
                <br />GPA: 3.9/4.0</p>
            <h3>Bachelor of Science in Computer Science</h3>
            <p>University of ABC, Anytown USA | May 2021
                <br />GPA: 3.7/4.0</p>

            <h2>Skills</h2>

            <p>Programming languages: Java, Python, JavaScript, C++<br />
                Frameworks and libraries: React, Node.js<br />
                Database systems: MySQL, MongoDB<br />
                Operating systems: Windows, linux<br />
                Version control: Git</p>

            <h2>Work Experience</h2>

            <h3>Leader of a Charity Team</h3>
            <p>Name College, USA | September, 2020<br />
                Worked on a team do side job and raise money for a <br />
                charity for an orphanage</p>

            <h2>Projects</h2>

            <h3>Personal Website</h3>
            <p>Built a personal website using React and deployed it on GitHub Pages<br />
                Source code: link</p>

            <h3>Online Bookstore</h3>
            <p>Developed a web application for a restaurant
                Source code: link</p>
        </div>
    );
}

export default Resume;
