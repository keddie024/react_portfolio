import React, { Component } from "react";

class Project extends Component {

    render() {

        return (
            <div>
                <div className="coverArea">
                    <div className="coverPhoto">
                        <h1 className="subtitleText">Welcome!</h1>
                    </div>
                </div>

                <div className="article" id="about-me">
                    <h1>About Me</h1>
                    <p id="p1">My name is Kevin Eddie and I am currently enrolled in the UCF Coding Boot Camp. My goal is to one day become a web developer with a reputable company. My experience with coding began in high school where I worked with HTML and CSS during my senior year. Along with that, I had also taken an introductory course for Visual Basic and C#. Though my current knowledge is limited, I intend to persevere until I am fluent in the most common programming languages. I know this will be a tough journey and I am confident in my ability to succeed.<br /> <br />The path I took to get here is similar to many of my classmates. As a teenager, my first job was bussing tables for a local BBQ restaurant. Through hard work I was able to climb my way up to cashier, then to shift manager, and finally to the assistant manager position. After demonstrating my abilities to organize and lead the team I was given the reins as the general manager. Years were spent with that company until opportunities opened elsewhere further south where I worked in transportation as a professional chauffeur and reservation specialist. The outbreak of Covid-19 heavily impacted business and I realized it was time to start a new chapter in my life. This brings me to where I am now; eager and ready to absorb as much information as possible so that I can apply it to my next career!</p>
                </div>

                <section class="article" id="work">
        <h1>Work</h1>
        <div class="projectFlex">

            <div class="projectBox" id="project1" onclick="location.href='https://github.com/mascarelloa/knowsy'">
                <div id="projectImage1">
                    <div class="imageText">
                        <h2>Knowsy</h2>
                        <p>MongoDB/Express/React/Node</p>
                    </div>
                </div>
            </div>

            <div class="projectBox" onclick="location.href='https://github.com/nickverneck/Surfs-Up'">
                <div id="projectImage2">
                    <div class="imageText">
                        <h2>Surf's Up</h2>
                        <p>HTML/CSS/JavaScript</p>
                    </div>
                </div>
            </div>

            <div class="projectBox" onclick="location.href='https://github.com/keddie024/code_quiz'">
                <div id="projectImage3">
                    <div class="imageText">
                        <h2>Code Quiz</h2>
                        <p>HTML/CSS/JavaScript</p>
                    </div>
                </div>
            </div>

            <div class="projectBox" onclick="location.href='https://github.com/keddie024/work-day-scheduler'">
                <div id="projectImage4">
                    <div class="imageText">
                        <h2>Work Day Scheduler</h2>
                        <p>CSS/JavaScript</p>
                    </div>
                </div>
            </div>

            <div class="projectBox" onclick="location.href='https://github.com/CashGalko/Recipeasy'">
                <div id="projectImage5">
                    <div class="imageText">
                        <h2>App-A-Tizer</h2>
                        <p>Express/Handlebars</p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
            </div>
        )
    }

}

export default Project;