import React from 'react';

import style from '../Project.module.css';
import FadeIn from 'react-fade-in';
import NavFooter from '../../NavFooter/NavFooter';

import recommended from '../../../../images/codingProjects/FlightschoolDB/recommended.png';
import graph from '../../../../images/codingProjects/FlightschoolDB/graph.png';

function FlightschoolDB() {
    return (
        <div className={style.projectContainer}>
            <FadeIn className={style.contentContainer}>
                <h1 className={style.projectTitle}>Schedulemaster Dashboard</h1>
                <NavFooter
                    siteLink="https://cs5021-group7.netlify.app/"
                    githubLink="https://github.com/Kevinjchang98/CS5021-Project-React"
                />

                <div className={style.descriptionContainer}>
                    <div className={style.descriptionList}>
                        <p className={style.descriptionListItem}>
                            Purpose: Extension of School Project
                        </p>
                        <p className={style.descriptionListItem}>
                            Project Type: ReactJS, NodeJS, MySQL
                        </p>
                        <p className={style.descriptionListItem}>
                            Date: Fall 2021
                        </p>
                    </div>

                    <div className={style.descriptionParagraph}>
                        <p>
                            A web interface to access a mock flight school's MySQL database.
                        </p>
                    </div>
                </div>

                <h2 className={style.subheading}>Purpose</h2>
                <p>In our Database class at Seattle University, we were split into groups to make a database for some mock business. Our group chose to do a flight school. We were supposed to use a provided Java program named Queryrunner which allowed users to run various queries through a GUI, but I chose to create a web interface instead, as well as provided some additional functionality.</p>

                <h2 className={style.subheading}>A walkthrough</h2>
                <p>Basic functions analogous to those found in the provided Queryrunner program to simply query and return results are found in the Sample Queries section of the navbar. Results are simply returned as a table representing the MySQL backend's response.</p>

				<img src={recommended} alt="Example of recommended aircraft" className={style.image} />
                <p>
                    Additional functionality beyond the provided Queryrunner program were added. One such function is viewing aircraft recommended to a specific customer ID based upon various individual factors, as well as being able to create a reservation which would then be added to the MySQL database. Another function was further processing of the returned database data into a simple graph, which was made with D3.
                </p>

				<img src={graph} alt="Example of graphing of returned database data" className={style.image} />
            </FadeIn>
        </div>
    );
}

export default FlightschoolDB;
