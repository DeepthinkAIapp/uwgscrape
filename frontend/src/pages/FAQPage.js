import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQPage.css';

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqCategories = [
    {
      name: 'Pond Setup & Installation',
      icon: '🏗️',
      faqs: [
        {
          question: 'How much does it cost to build a pond?',
          answer: 'Pond costs vary based on size, features, and complexity. A basic 100-gallon pond starts around $500-800, while larger koi ponds with advanced filtration can range from $3,000-15,000. We provide free consultations to give you accurate estimates for your specific project.'
        },
        {
          question: 'How long does it take to build a pond?',
          answer: 'Most residential ponds can be completed in 1-3 days, depending on size and complexity. Larger commercial projects may take 1-2 weeks. We provide detailed timelines during the planning phase so you know exactly what to expect.'
        },
        {
          question: 'Do I need permits for a pond?',
          answer: 'Permit requirements vary by location and pond size. Generally, ponds under 5,000 gallons don\'t require permits, but we always check local regulations and handle all necessary permits as part of our service.'
        },
        {
          question: 'What\'s the best location for a pond?',
          answer: 'Ideal locations have partial shade, good drainage, and are away from trees with invasive roots. We assess your property during consultation to recommend the perfect spot that balances aesthetics, functionality, and maintenance ease.'
        }
      ]
    },
    {
      name: 'Water Quality & Maintenance',
      icon: '💧',
      faqs: [
        {
          question: 'How often should I test my pond water?',
          answer: 'Test water quality weekly during the first month, then monthly once established. During hot weather or after adding fish, test more frequently. We provide water testing services and can teach you to do it yourself.'
        },
        {
          question: 'Why is my pond water green?',
          answer: 'Green water is usually caused by algae blooms from excess nutrients or sunlight. Solutions include adding beneficial bacteria, installing UV sterilizers, increasing plant coverage, or using pond dye. We can diagnose and fix the specific cause.'
        },
        {
          question: 'How do I maintain proper pH levels?',
          answer: 'Ideal pH is 6.5-8.5. Use pH test kits regularly and adjust with pH buffers if needed. Natural methods include adding limestone rocks or crushed coral. We provide pH adjustment services and products to maintain optimal levels.'
        },
        {
          question: 'When should I clean my pond?',
          answer: 'Clean ponds when debris builds up, water quality declines, or before winter. Avoid over-cleaning as it removes beneficial bacteria. We recommend professional cleaning 1-2 times per year, with regular maintenance in between.'
        }
      ]
    },
    {
      name: 'Fish Care & Health',
      icon: '🐟',
      faqs: [
        {
          question: 'How many fish can I put in my pond?',
          answer: 'General rule: 1 inch of fish per 10 gallons of water. For koi, allow 1 fish per 100 gallons minimum. We help calculate proper stocking levels based on your pond size, filtration, and fish species.'
        },
        {
          question: 'What should I feed my pond fish?',
          answer: 'Feed high-quality fish food appropriate for your fish species. Feed 2-3 times daily in warm weather, once daily in cooler weather, and stop feeding when water temperature drops below 50°F. We carry premium fish foods and can recommend the best options.'
        },
        {
          question: 'How do I know if my fish are sick?',
          answer: 'Watch for signs like lethargy, loss of appetite, unusual swimming, spots, or rapid breathing. Early detection is key. We provide fish health assessments and treatment services to keep your fish healthy.'
        },
        {
          question: 'Can I mix different types of fish?',
          answer: 'Yes, but choose compatible species with similar temperature and pH requirements. Koi and goldfish work well together. Avoid mixing aggressive species. We help select compatible fish for your pond environment.'
        }
      ]
    },
    {
      name: 'Plants & Landscaping',
      icon: '🌱',
      faqs: [
        {
          question: 'What plants are best for ponds?',
          answer: 'Choose a mix of submerged, floating, and marginal plants. Popular options include water lilies, lotus, water hyacinth, and various grasses. We carry a wide selection and help you choose plants suited to your climate and pond conditions.'
        },
        {
          question: 'How do I plant aquatic plants?',
          answer: 'Use planting baskets with aquatic soil and gravel topping. Plant at appropriate depths for each species. We provide planting services and can teach you proper techniques for maintaining healthy aquatic plants.'
        },
        {
          question: 'Do I need to fertilize pond plants?',
          answer: 'Yes, aquatic plants benefit from specialized pond plant fertilizers. Use slow-release tablets or liquid fertilizers designed for water gardens. We carry professional-grade fertilizers and can recommend the best feeding schedule.'
        },
        {
          question: 'How do I control algae naturally?',
          answer: 'Increase plant coverage to compete with algae for nutrients, add beneficial bacteria, use barley straw, and ensure proper water circulation. We provide natural algae control solutions and can design plant-heavy ponds that naturally limit algae growth.'
        }
      ]
    },
    {
      name: 'Equipment & Troubleshooting',
      icon: '🔧',
      faqs: [
        {
          question: 'What size pump do I need?',
          answer: 'Pump should circulate total pond volume every 1-2 hours. For a 1,000-gallon pond, you need a 500-1,000 GPH pump. We calculate exact pump requirements based on your pond size, features, and head pressure.'
        },
        {
          question: 'How often should I clean my filter?',
          answer: 'Clean mechanical filters weekly during peak season, biological filters monthly. Rinse with pond water to preserve beneficial bacteria. We provide filter maintenance services and can teach you proper cleaning techniques.'
        },
        {
          question: 'Why isn\'t my pump working?',
          answer: 'Check for clogs, electrical connections, and proper water level. Pumps can fail due to debris, worn impellers, or electrical issues. We provide pump repair and replacement services to keep your pond running smoothly.'
        },
        {
          question: 'How do I winterize my pond?',
          answer: 'Remove debris, trim plants, install pond heaters or de-icers, and reduce feeding. In cold climates, consider shutting down pumps and filters. We provide comprehensive winterization services to protect your pond through winter.'
        }
      ]
    },
    {
      name: 'Seasonal Care',
      icon: '🍂',
      faqs: [
        {
          question: 'What should I do in spring?',
          answer: 'Remove winter covers, clean debris, test water quality, restart equipment, and gradually resume feeding. This is also a good time for plant division and adding new fish. We provide spring startup services to get your pond ready for the season.'
        },
        {
          question: 'How do I care for my pond in summer?',
          answer: 'Monitor water temperature, increase aeration if needed, feed fish regularly, and watch for algae blooms. Provide shade if water gets too hot. We offer summer maintenance programs to keep your pond healthy during hot weather.'
        },
        {
          question: 'What about fall preparation?',
          answer: 'Remove falling leaves, trim back plants, reduce feeding as temperatures drop, and prepare for winter. This is also a good time for major maintenance. We provide fall cleanup services to prepare your pond for winter.'
        },
        {
          question: 'How do I protect my pond in winter?',
          answer: 'Keep a hole in the ice for gas exchange, use pond heaters if needed, and avoid breaking ice. In very cold climates, consider moving fish indoors. We provide winter protection services to keep your pond and fish safe.'
        }
      ]
    }
  ];

  const quickAnswers = [
    {
      question: 'How much does pond maintenance cost?',
      answer: 'Basic maintenance runs $50-100/month for small ponds, $100-300/month for larger ponds. We offer maintenance packages to fit your budget and needs.'
    },
    {
      question: 'Do you service existing ponds?',
      answer: 'Yes! We service, repair, and upgrade existing ponds. Our team can assess your current setup and recommend improvements or repairs.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve the greater Utah area including Salt Lake City, Provo, Ogden, and surrounding communities. Call us to confirm service in your area.'
    },
    {
      question: 'Do you offer emergency services?',
      answer: 'Yes, we provide emergency pond services for urgent issues like pump failures, fish health problems, or water quality emergencies.'
    }
  ];

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common pond questions and learn from our expert knowledge. Can't find what you're looking for? Give us a call!</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Expert Advice</a>
            <Link to="/resources" className="secondary-button">View All Resources</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2782.jpg" alt="FAQ and expert pond advice" />
        </div>
      </section>

      {/* Quick Answers */}
      <section className="quick-answers-section first-section-gradient">
        <div className="container">
          <h2>Quick Answers</h2>
          <p>Get instant answers to the most common questions</p>
          <div className="quick-answers-grid">
            {quickAnswers.map((item, index) => (
              <div key={index} className="quick-answer-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="faq-categories-section">
        <div className="container">
          <h2>Browse by Category</h2>
          <p>Find detailed answers organized by topic</p>
          
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category">
              <div className="category-header">
                <h3>{category.icon} {category.name}</h3>
              </div>
              
              <div className="faq-list">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex;
                  return (
                    <div key={faqIndex} className="faq-item">
                      <button 
                        className={`faq-question ${openFAQ === globalIndex ? 'open' : ''}`}
                        onClick={() => toggleFAQ(globalIndex)}
                      >
                        <span>{faq.question}</span>
                        <span className="faq-icon">{openFAQ === globalIndex ? '−' : '+'}</span>
                      </button>
                      
                      <div className={`faq-answer ${openFAQ === globalIndex ? 'open' : ''}`}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expert Tips */}
      <section className="expert-tips-section">
        <div className="container">
          <h2>Expert Tips</h2>
          <p>Pro tips from our experienced pond professionals</p>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">💡</div>
              <h3>Start Small</h3>
              <p>Begin with a smaller pond to learn the basics before investing in a large water feature. You can always expand later!</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🌡️</div>
              <h3>Monitor Temperature</h3>
              <p>Water temperature affects fish health, plant growth, and algae development. Keep a thermometer handy and check regularly.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🔄</div>
              <h3>Consistent Maintenance</h3>
              <p>Regular, small maintenance tasks prevent major problems. A few minutes each week saves hours of work later.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">📚</div>
              <h3>Keep Learning</h3>
              <p>Pond keeping is a learning process. Join our community, read our guides, and don't hesitate to ask questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="questions-section gradient-wipe-up">
        <div className="container">
          <h2>Still Have Questions?</h2>
          <p>Our pond experts are here to help with personalized advice and solutions</p>
          <div className="contact-options">
            <div className="contact-option">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>Speak directly with our pond experts</p>
              <a href="tel:(801) 590-8516" className="contact-button">(801) 590-8516</a>
            </div>
            <div className="contact-option">
              <div className="contact-icon">✉️</div>
              <h3>Send a Message</h3>
              <p>Get detailed answers via email</p>
              <Link to="/contact" className="contact-button">Contact Form</Link>
            </div>
            <div className="contact-option">
              <div className="contact-icon">🏪</div>
              <h3>Visit Our Store</h3>
              <p>See our experts in person</p>
              <Link to="/contact" className="contact-button">Store Info</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>Need Personalized Help?</h2>
          <p>Every pond is unique. Get expert advice tailored to your specific situation</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
