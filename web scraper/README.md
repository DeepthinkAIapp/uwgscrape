# Utah Water Gardens - Advanced Lead Generation System

A comprehensive, automated lead generation and nurturing system designed specifically for Utah Water Gardens. This system transforms your web scraper into a robust lead generation tool that finds, scores, nurtures, and converts high-quality leads.

## 🚀 Features

### 🔍 Multi-Source Lead Generation
- **Real Estate Listings**: Searches Zillow, Realtor.com, Redfin for properties with ponds/water features
- **Social Media**: Monitors Facebook, Instagram, Pinterest for pond-related discussions
- **Local Directories**: Scrapes Yellow Pages, Yelp, Google Maps for local businesses
- **Competitor Analysis**: Tracks competitor websites and social media presence

### 🎯 Intelligent Lead Scoring
- **Keyword Analysis**: Scores leads based on pond/water feature related keywords
- **Location Bonus**: Prioritizes Utah-based leads (Salt Lake City, West Jordan, Sandy, etc.)
- **Service Indicators**: Identifies leads looking for maintenance, installation, repair
- **Urgency Detection**: Flags leads with emergency or urgent needs

### 📧 Automated Lead Nurturing
- **Follow-up Sequences**: Automated email and phone call reminders
- **Email Campaigns**: Targeted campaigns based on lead characteristics
- **Engagement Tracking**: Monitors email opens, clicks, and interactions
- **Lead Qualification**: Automatically qualifies leads based on engagement

### 📊 Advanced Analytics & Reporting
- **ROI Tracking**: Calculates potential revenue and return on investment
- **Performance Metrics**: Source performance, conversion rates, lead velocity
- **Predictive Analytics**: Machine learning models for lead conversion prediction
- **Visual Reports**: Charts and graphs for easy analysis
- **Forecasting**: Predicts future lead generation trends

### 🗄️ Database Management
- **SQLite Database**: Stores all lead data, interactions, and campaign history
- **Duplicate Prevention**: Prevents duplicate leads based on contact information
- **Data Export**: Export leads to CSV for CRM integration
- **Backup & Recovery**: Database backup and recovery capabilities

## 🛠️ Installation

### Prerequisites
- Python 3.8 or higher
- pip package manager

### Setup Instructions

1. **Clone or download the system files**
   ```bash
   cd web scraper
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure the system**
   ```bash
   python main_lead_generator.py
   ```
   This will create a default `config.json` file that you can customize.

4. **Update email configuration**
   Edit `config.json` and update the email settings:
   ```json
   {
     "email_config": {
       "smtp_server": "smtp.gmail.com",
       "smtp_port": 587,
       "username": "your-email@gmail.com",
       "password": "your-app-password",
       "from_name": "Utah Water Gardens"
     }
   }
   ```

## 📖 Usage

### Basic Commands

**Run the complete pipeline (recommended):**
```bash
python main_lead_generator.py --mode full
```

**Generate leads only:**
```bash
python main_lead_generator.py --mode generate
```

**Nurture existing leads:**
```bash
python main_lead_generator.py --mode nurture
```

**Generate analytics and reports:**
```bash
python main_lead_generator.py --mode analyze
```

**Get quick statistics:**
```bash
python main_lead_generator.py --mode stats
```

**Export leads to CSV:**
```bash
python main_lead_generator.py --mode export --output my_leads.csv
```

### Advanced Usage

**Create a targeted email campaign:**
```python
from main_lead_generator import UtahWaterGardensLeadGenerator

generator = UtahWaterGardensLeadGenerator()

# Create campaign for high-value leads in Salt Lake City
campaign_criteria = {
    'min_score': 40,
    'city': 'Salt Lake City',
    'status': 'new',
    'template': 'seasonal_promotion'
}

campaign_id = generator.create_targeted_campaign(
    "Spring Salt Lake City Campaign", 
    campaign_criteria
)
```

**Predict lead conversion:**
```python
from lead_analytics_system import LeadAnalyticsSystem

analytics = LeadAnalyticsSystem()

lead_features = {
    'lead_score': 45,
    'interaction_count': 3,
    'email_count': 2,
    'emails_opened': 1,
    'emails_clicked': 0
}

prediction = analytics.predict_lead_conversion(lead_features)
print(f"Conversion probability: {prediction['conversion_probability']:.1%}")
```

## 📁 File Structure

```
web scraper/
├── main_lead_generator.py          # Main orchestrator
├── lead_generation_system.py       # Lead discovery and scoring
├── lead_nurturing_system.py        # Follow-up and email campaigns
├── lead_analytics_system.py        # Analytics and reporting
├── requirements.txt                # Python dependencies
├── config.json                     # Configuration file
├── leads.db                        # SQLite database
├── utah_water_gardens_leads.log    # System logs
├── lead_analytics/                 # Generated charts and reports
│   ├── source_performance.png
│   ├── lead_distribution.png
│   ├── time_series.png
│   └── roi_analysis.png
└── README.md                       # This file
```

## ⚙️ Configuration

### Email Settings
Configure your email provider settings in `config.json`:

```json
{
  "email_config": {
    "smtp_server": "smtp.gmail.com",
    "smtp_port": 587,
    "username": "your-email@gmail.com",
    "password": "your-app-password",
    "from_name": "Utah Water Gardens"
  }
}
```

### Lead Scoring
Customize lead scoring criteria:

```json
{
  "lead_scoring": {
    "high_value_keywords": ["koi pond", "water feature", "pond maintenance"],
    "medium_value_keywords": ["pond", "water garden", "fountain"],
    "location_bonus": ["Salt Lake City", "West Jordan", "Sandy", "Ogden", "Provo"]
  }
}
```

### Scraping Settings
Adjust scraping behavior:

```json
{
  "scraping_settings": {
    "max_leads_per_source": 50,
    "delay_between_requests": 2,
    "timeout": 10
  }
}
```

## 📊 Reports and Analytics

The system generates several types of reports:

### 1. Lead Generation Report
- Total leads generated
- Leads by source
- Lead quality distribution
- Recent leads summary

### 2. Nurturing Report
- Email performance metrics
- Follow-up completion rates
- Campaign effectiveness
- Lead status distribution

### 3. Analytics Report
- ROI calculations
- Revenue projections
- Source performance analysis
- Trend analysis and forecasting

### 4. Visual Reports
- Source performance charts
- Lead distribution graphs
- Time series analysis
- ROI analysis charts

## 🔧 Customization

### Adding New Lead Sources
Edit `lead_generation_system.py` and add new sources to the search methods:

```python
def search_new_source(self):
    # Add your custom scraping logic here
    pass
```

### Custom Email Templates
Modify email templates in `lead_nurturing_system.py`:

```python
self.email_templates = {
    'custom_template': {
        'subject': 'Your Custom Subject',
        'body': 'Your custom email body with {placeholders}'
    }
}
```

### Custom Lead Scoring
Adjust scoring weights in the `score_lead` method:

```python
def score_lead(self, text_content, location, services):
    score = 0
    # Add your custom scoring logic
    return score
```

## 🚨 Important Notes

### Rate Limiting
- The system includes built-in delays to respect website rate limits
- Adjust `delay_between_requests` in config if needed
- Monitor logs for any rate limiting issues

### Email Compliance
- Ensure your email campaigns comply with CAN-SPAM laws
- Include unsubscribe options in your email templates
- Monitor bounce rates and clean your email lists

### Data Privacy
- The system stores lead data locally in SQLite
- Consider data retention policies
- Ensure compliance with privacy regulations

## 🐛 Troubleshooting

### Common Issues

**"Module not found" errors:**
```bash
pip install -r requirements.txt
```

**Email sending fails:**
- Check your SMTP settings in `config.json`
- Ensure you're using an app password for Gmail
- Verify your email provider allows SMTP access

**Database errors:**
- Delete `leads.db` to reset the database
- Check file permissions in the directory

**Scraping blocked:**
- Increase delays between requests
- Check if websites have changed their structure
- Monitor logs for specific error messages

### Log Files
- Check `utah_water_gardens_leads.log` for detailed error information
- Logs include timestamps and error details for debugging

## 📈 Performance Optimization

### For Large Scale Usage
1. **Increase database performance:**
   - Add indexes to frequently queried columns
   - Consider using PostgreSQL for larger datasets

2. **Optimize scraping:**
   - Use proxy rotation for high-volume scraping
   - Implement concurrent scraping with proper rate limiting

3. **Email delivery:**
   - Use dedicated email service providers (SendGrid, Mailgun)
   - Implement email verification and cleaning

## 🤝 Support

For questions or issues:
1. Check the log files for error details
2. Review the configuration settings
3. Ensure all dependencies are installed
4. Test with a small dataset first

## 📄 License

This system is designed specifically for Utah Water Gardens. Please ensure compliance with website terms of service and applicable laws when scraping data.

---

**Utah Water Gardens Lead Generation System** - Transform your web scraper into a powerful lead generation machine! 🎯 