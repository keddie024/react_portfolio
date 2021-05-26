import React, { Component } from "react";
import "../styles/style.css";

export default class Footer extends Component {
    render() {
        return (
            <div className="article" id="contact-me">
                <h1>Contact Me</h1>
                <ul className="contactOptions">
                    <li>
                        <a className="contactLink" href="">561-601-5844</a>
                    </li>
                    <li>
                        <a className="contactLink" href="">keddie024@gmail.com</a>
                    </li>
                    <li>
                        <a className="contactLink" href="https://github.com/keddie024">GitHub</a>
                    </li>
                    <li>
                        <a className="contactLink" href="https://www.linkedin.com/in/kevin-eddie-862349209/">LinkedIn</a>
                    </li>
                </ul>
            </div>
        );
    }
}