import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/style.css";

export default class Header extends Component {
    render() {
        return (
            <header>
                <section class="navbar">
                    <h1>My Portfolio</h1>
                    <ul class="navlinks">
                        <li>
                            <a class="link" href="#about-me">About Me</a>
                        </li>
                        <li>
                            <a class="link" href="#work">Work</a>
                        </li>
                        <li>
                            <a class="link" href="#contact-me">Contact Me</a>
                        </li>
                        <li>
                            <a class="link" href="#resume">Resume</a>
                        </li>
                    </ul>
                </section>
            </header>
        );
    }
}