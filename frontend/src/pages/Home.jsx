// Home.jsx
import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page-container">
      <div className="home-page-section" >
        <img 
          src="./frontend/public/image/homepagebackground.jpg"
          alt="HomePageBackground" 
          className="home-background-image"
        />
        <div className="home-hero-content">
          <h1>Awaken Your Guardian</h1>
          <p>Welcome to Channel 10 – Your Window to the World. ✨</p>
          <button className="home-shop-button">Shop the World</button>
        </div>
      </div>
      <div className="home-featured-section">
        <h2>Start Your Connection</h2>
        <div className="home-featured-grid">
          <div className="home-featured-card">
            <img src="./frontend/public/image/unknownuniverse.png" alt="Knowledge Discovery" />
            <p>Knowledge Discovery</p>
            <h3>Dive into an ever-expanding collection of insights</h3>
          </div>
          <div className="home-featured-card">
            <img src="./frontend/public/image/findyourpiece.jpg" alt="Find Your Piece" />
            <p>Find Your Piece</p>
            <h3>Every Item tells a unique story</h3>
          </div>
          <div className="home-featured-card">
            <img src="./frontend/public/image/primarycolors.jpg" alt="Connect With Fellows" />
            <p>Connect With Fellows</p>
            <h3>This is a space to share your own stories, ask questions, and engage in discussions about the diverse cultures and findings that make our world so unique.</h3>
          </div>
          <div className="home-featured-card">
            <img src="./frontend/public/image/memories.jpg" alt="The Archive" />
            <p>The Archive</p>
            <h3>A digital monument to the world's cultural heritage. This section serves as a comprehensive repository of knowledge, providing deep dives into history, art, and science from different cultures.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}