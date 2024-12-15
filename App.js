import React from 'react';
import './App.css';

function App() {
    return (
        <div className="Sushil">
            <header className="Sushil's Portfolio">
                <h1>Welcome to Sushil's Portfolio</h1>
                <p>Business Administrator | Passionate about leveraging data and technology to enhance business performance.</p>
            </header>
            <main>
                <section id="about">
                    <h2>About Myself</h2>
                    <p>I am passionate about improving business operations through strategic leadership, financial management, data-driven insights.</p>
                </section>

                <section id="projects">
                    <h2>My Projects</h2>
                    <ul>
                        <li>
                            <h3>Project 1:Library database </h3>
                            <p>A responsive way of displaying library database using Sql and Javascript.</p>
                        </li>
                        <li>
                            <h3>Project 2: E-Commerce App(GumTree)</h3>
                            <p> GumTree website redesign and adding additional features making it more responsive.</p>
                        </li>
                    </ul>
                </section>

                <section id="contact">
                    <h2>Contact Me</h2>
                    <p>Email: sc29909n@pace.edu</p>
                    <p>GitHub: <a href="https://github.com/Sushil752">github.com/Sushil752</a></p>
                </section>
            </main>
        </div>
    )
}

export default App;