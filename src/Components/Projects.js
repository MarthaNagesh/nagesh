import React, { useEffect } from 'react';
import './Projects.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
        return (
            <section className="projects" id="projects">
            <div className="container">
                <div className="section-heading">
                    <h1>Projects</h1>
                </div>
                <div className="projects-item">
                    <div data-aos="fade-up" className="projects-img has-margin-right">
                        <img src={require("../images/Project-1.png")} ></img>
                    </div>
                    <div data-aos="fade-down" className="projects-description">
                        <h1>Portfolio</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book. 
                        </p>
                        <a target="_new" href="https://github.com/MarthaNagesh/nagesh" className="cta">View code</a>
                        <a target="_new" href="https://marthanagesh.github.io/nagesh/" className="cta">View site</a>
                    </div>
                </div>
                <div className="projects-item">
                <div data-aos="fade-down"className="projects-description has-margin-right">
                        <h1>Places</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book.
                        </p>
                        <a target="_new" href="https://github.com/MarthaNagesh/Places/tree/master" className="cta">View code</a>
                        <a target="_new" href="https://marthanagesh.github.io/Places/" className="cta">View site</a>
                    </div>
                    <div data-aos="fade-up" className="projects-img">
                        <img src={require("../images/Project-2.png")} ></img>
                    </div>
                    
                </div>
                <div className="projects-item">
                    <div data-aos="fade-up" className="projects-img has-margin-right">
                        <img src={require("../images/Project-3.png")} ></img>
                    </div>
                    <div data-aos="fade-down" className="projects-description">
                        <h1>Burger</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book.
                        </p>
                        <a target="_new" href="https://github.com/MarthaNagesh/Burger" className="cta">View code</a>
                        <a target="_new" href="https://marthanagesh.github.io/Burger/" className="cta">View site</a>
                    </div>
                </div>
                <div className="projects-item">
                <div data-aos="fade-down" className="projects-description has-margin-right">
                        <h1>expense-Tracker</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book.
                        </p>
                        <a target="_new" href="https://github.com/MarthaNagesh/expenseTracker-React" className="cta">View code</a>
                        <a target="_new" href="https://marthanagesh.github.io/expenseTracker-React/" className="cta">View site</a>
                    </div>
                    <div data-aos="fade-up" className="projects-img">
                        <img src={require("../images/Project-4.png")} ></img>
                    </div>
                    
                </div>
            </div>
            </section>
        )
}

export default Projects;