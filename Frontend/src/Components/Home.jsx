import React from 'react';
import { Link } from "react-router-dom";
// Importing the Navbar component
import './Home.css';          // Importing the CSS file for styling

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Prepare for Your Dream Job with HirePrep</h1>
          <p>
            Structured DSA practice, expert notes, and curated roadmaps to guide your preparation.
          </p>
          <Link to="/problems">
            <button className="cta-btn">Start Preparing Today</button>
          </Link>

        </div>
      </section>
      {/* Roadmap Section */}
      <section className="roadmap">
        <h2>Roadmap to Becoming a Software Engineer</h2>
        <div className="roadmap-items">
          <a href="https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA">
            <div className="roadmap-item cta-btn">
              <h3>Step 1: Master DSA</h3>
              <p>Start by mastering Data Structures and Algorithms. Practice solving problems on platforms like LeetCode, GeeksforGeeks, and Codeforces.</p>
            </div>
          </a>

          <Link to="/core">
          <div className="roadmap-item cta-btn">
            <h3>Step 2: Learn Core Computer Science Subjects</h3>
            <p>Understand essential topics like DBMS, Computer Networks, Operating Systems, and Object-Oriented Programming (OOPs).</p>
          </div>
          </Link>

          <a href="https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w">
          <div className="roadmap-item cta-btn">
            <h3>Step 3: Build Projects</h3>
            <p>Develop real-world projects to showcase your skills. Focus on both front-end and back-end technologies to build full-stack applications.</p>
          </div>
          </a>

          <div className="roadmap-item">
            <h3>Step 4: Prepare for Interviews</h3>
            <p>Start preparing for technical interviews by solving mock interview questions and practicing coding on a whiteboard.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
  <div className="social-links">
    <a href="https://www.linkedin.com/in/sejal-dhamdar-915421246/" target="_blank" rel="noopener noreferrer">
      <img src="/LinkedIn.svg" alt="LinkedIn" className="social-icon" />
    </a>
    <a href="https://github.com/Sej9l" target="_blank" rel="noopener noreferrer">
      <img src="/Github.svg" alt="GitHub" className="social-icon" />
    </a>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2025 Made By Sejal Dhamdar.</p>
  </div>
</footer>


    </div>
  );
};

export default Home;
