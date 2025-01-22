# Web Scraping and Data Processing Tool

This project provides a powerful web scraping solution combined with AI-powered data processing capabilities. It uses Playwright for browser automation and Google's Generative AI for intelligent data extraction and analysis.

## Features

- **Web Scraping**: Extract data from web pages using Playwright
- **AI Processing**: Analyze scraped data using Google's Generative AI
- **Data Export**: Save processed results in structured JSON format
- **Error Handling**: Robust error handling and retry mechanisms
- **Configuration**: Easy setup through environment variables

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/web-scraping-tool.git
   cd web-scraping-tool
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:
   - Create a `.env` file
   - Add your Google API key:
     ```
     GOOGLE_API_KEY=your_api_key_here
     ```

## Usage

Run the scraping tests:

```bash
pnpm test
```

The tool will:

1. Scrape target websites
2. Process data using AI
3. Save results to `monthly_views.txt`

## Configuration

### Environment Variables

| Variable       | Description                  |
| -------------- | ---------------------------- |
| GOOGLE_API_KEY | Google Generative AI API key |

### File Structure

```
.
├── consts/            # Constant definitions
├── lib/               # Core functionality
├── tests/             # Test cases
├── tests-examples/    # Example test cases
├── .env               # Environment variables
├── package.json       # Project dependencies
├── playwright.config.ts # Playwright configuration
└── README.md          # This documentation
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

MIT License

See [LICENSE](LICENSE) for full text.
