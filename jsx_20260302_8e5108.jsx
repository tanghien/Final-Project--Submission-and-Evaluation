import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  const teamMembers = [
    { name: 'Sarah Johnson', role: 'Founder & Head Horticulturist', experience: '15+ years' },
    { name: 'Michael Chen', role: 'Plant Care Specialist', experience: '10+ years' },
    { name: 'Emma Rodriguez', role: 'Customer Experience Manager', experience: '8+ years' }
  ];

  const achievements = [
    { icon: '🌱', number: '10,000+', label: 'Happy Customers' },
    { icon: '🌿', number: '500+', label: 'Plant Varieties' },
    { icon: '🏆', number: '15+', label: 'Awards Won' },
    { icon: '📦', number: '50,000+', label: 'Plants Delivered' }
  ];

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>About Paradise Nursery</h1>
          <p className="hero-subtitle">Bringing Nature Closer to You Since 2020</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p className="mission-text">
            At Paradise Nursery, we believe that everyone deserves to experience the joy 
            and tranquility that plants bring to a space. Our mission is to make quality 
            houseplants accessible to everyone while promoting sustainable living and 
            environmental consciousness.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                What started as a small collection of plants in Sarah's apartment has grown 
                into one of the most trusted plant nurseries in the country. Sarah's passion 
                for plants began during her time studying horticulture at the University of 
                Washington, where she dreamed of creating a space where people could connect 
                with nature, regardless of where they live.
              </p>
              <p>
                Today, Paradise Nursery is home to over 500 varieties of plants, from 
                low-maintenance succulents for beginners to rare specimens for seasoned 
                plant enthusiasts. Our team of expert horticulturists ensures that every 
                plant we sell is healthy, ethically sourced, and ready to thrive in its 
                new home.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=600&h=400&fit=crop" 
                alt="Our nursery"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <h2>Our Impact in Numbers</h2>
          <div className="achievements-grid">
            {achievements.map((item, index) => (
              <div key={index} className="achievement-card">
                <span className="achievement-icon">{item.icon}</span>
                <h3>{item.number}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">🌿</span>
              <h3>Sustainability</h3>
              <p>We practice eco-friendly farming and use biodegradable packaging for all shipments.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🤝</span>
              <h3>Community</h3>
              <p>We host free workshops and plant care classes for our local community.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">💚</span>
              <h3>Quality</h3>
              <p>Every plant is hand-picked and inspected before being shipped to you.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">📚</span>
              <h3>Education</h3>
              <p>We provide detailed care guides and 24/7 plant parenting support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Plant Experts</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image-placeholder">
                  <span className="placeholder-icon">👤</span>
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-experience">{member.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Start Your Plant Journey?</h2>
          <p>Join thousands of happy plant parents who've found their perfect green companion with us.</p>
          <Link to="/products" className="cta-button">
            Explore Our Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;