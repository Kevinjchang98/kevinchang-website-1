import React from 'react';

import style from '../Project.module.css';
import FadeIn from 'react-fade-in';
import NavFooter from '../../NavFooter/NavFooter';

import scheduledFlights from '../../../../images/codingProjects/SchedulemasterDashboard/scheduledFlights.png';
import flightsPerWeekday from '../../../../images/codingProjects/SchedulemasterDashboard/flightsPerWeekday.png';
import details from '../../../../images/codingProjects/SchedulemasterDashboard/details.png';

function SchedulemasterDashboard() {
    return (
        <div className={style.projectContainer}>
            <FadeIn className={style.contentContainer}>
                <h1 className={style.projectTitle}>Schedulemaster Dashboard</h1>
                <NavFooter
                    siteLink="https://schedulemaster-dashboard.vercel.app/"
                    githubLink="https://github.com/Kevinjchang98/schedulemaster_dashboard"
                />

                <div className={style.descriptionContainer}>
                    <div className={style.descriptionList}>
                        <p className={style.descriptionListItem}>
                            Purpose: Personal project
                        </p>
                        <p className={style.descriptionListItem}>
                            Project Type: NextJS, D3.js, NoSQL, TypeScript
                        </p>
                        <p className={style.descriptionListItem}>
                            Date: Spring 2022
                        </p>
                    </div>

                    <div className={style.descriptionParagraph}>
                        <p>
                            A dashboard that to the API of Schedulemaster, a
                            scheduling software used by various flight schools,
                            to visualize data relevant for a flight school.
                        </p>
                    </div>
                </div>

                <h2 className={style.subheading}>Purpose</h2>

                <p>
                    During my time at a flight school, one of the aircraft had
                    been accidentally overflown; each aircraft needs to go for
                    maintenance every 50 flight hours at that school, and the
                    system for keeping track of the times was a purely paper
                    log. One of the instructors discussed wanting an obvious
                    warning for students if the aircraft they were about to fly
                    was low in hours remaining.
                </p>

                <h2 className={style.subheading}>A walkthrough</h2>

                <p>
                    I used the Schedulemaster API which exposes scheduling
                    information to highlight when someone was at risk of
                    overflying an aircraft based on schedule lengths. The
                    front-end queries through a Python Flask API which handles
                    authentication to the Schedulemaster API and allows for more
                    in-depth data processing should this project be extended in
                    the future. Due to Schedulemaster not keeping track of how
                    many hours are left until maintenance is required, a NoSQL
                    backend was created on Firebase where the admin of the
                    flight school may update the hours remaining, and this would
                    be used to calculate when a scheduled flight might be at
                    risk of overflying the aircraft.
                </p>

                <p>
                    The hours remaining on the aircraft are easily editable, as
                    flights are commonly not exactly the same length as
                    scheduled, and thus as a day progresses it's possible that
                    the actual number of hours left on an aircraft becomes
                    desynchronized with the value on the Firebase backend.
                    Flights will typically be of equal or lesser length than the
                    schedule's length, so it's assumed that each flight will
                    take the entire scheduled length. The first schedule
                    highlighted in red would then be the one that wouldn't be
                    possible due to a lack of hours on the aircraft. Each name
                    can be clicked to view details about the schedule. The
                    sample data is from Schedulemaster's sample club, and thus
                    is sparse; a very large range is used in the time filter,
                    but if using real data one would likely only be viewing the
                    next week or so.
                </p>

                <img
                    src={scheduledFlights}
                    alt="Example of scheduled flights section"
                    className={style.image}
                />

                <p>
                    At the bottom of the homepage, there are then some various
                    data visualizations based on available data in
                    Schedulemaster. These were done with D3.
                </p>

                <img
                    src={flightsPerWeekday}
                    alt="Example of flights per weekday graph"
                    className={style.image}
                />

                <p>
                    Clicking through each aircraft in the first section also
                    gives some more details about each aircraft as well as a
                    visualization of number of scheduled flights vs weekday over
                    the past year.
                </p>

                <img
                    src={details}
                    alt="Example of individual aircraft details page"
                    className={style.image}
                />
            </FadeIn>
        </div>
    );
}

export default SchedulemasterDashboard;
