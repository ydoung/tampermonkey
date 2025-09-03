# Tampermonkey Scripts

## Overview
This repository contains Tampermonkey userscripts for overriding HTTP request responses with custom payloads. Currently includes scripts for Qualtrics platform testing and development.

## Installation

### Prerequisites
1. Install the Tampermonkey browser extension:
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

### Install Script
Click here to install: [Multi-Request Payload Override](https://github.com/ydoung/tampermonkey/raw/main/tampermonkey.user.js)

When you click the link, Tampermonkey will automatically prompt you to install the script.

### Enable Auto-Updates
1. Click Tampermonkey icon → Dashboard
2. Go to Settings tab
3. Under "Script Update":
   - Set "Check Interval" to "Every 12 hours" or "Every day"
   - Enable "Check for updates"

## Scripts Available

### Multi-Request Payload Override
**Purpose**: Override multiple HTTP request responses with custom payloads for testing and development purposes.

**Features**:
- Intercepts both fetch() and XMLHttpRequest calls
- Supports multiple request patterns with individual configurations
- Page-specific overrides (only applies when on specified pages)
- Configurable enable/disable for each override
- Console logging for debugging and monitoring

**Current Configurations**:
- **Qualtrics Heatmap Override**: Provides mock heatmap click data for Qualtrics DX portal testing
  - Matches: `/sr-data-pb-service/v3/projects/ZN_110CJ6DkjdBAr1c/heatmaps/getClickmapData`
  - Page: Qualtrics DX portal heatmap view
  - Data: 50+ mock click coordinates with varying counts

**Supported Domains**:
- `*.qualtrics.com`
- `qualtrics.com`

## Usage

### For Developers
The script automatically activates when you visit supported domains. Check the browser console for interceptor status and activity logs.

### Adding New Overrides
To add new request overrides, edit the `REQUEST_OVERRIDES` array in the script:

```javascript
{
    name: 'Your Override Name',
    apiRequestPattern: 'api/endpoint/path',
    currentPagePattern: 'https://example.com/specific/page', // Optional
    enabled: true,
    response: {
        status: 200,
        statusText: 'OK',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            // Your custom response data here
        }
    }
}
```

## Changelog

### Version 2.0.0 (2024-12-19)
- Initial GitHub release
- Added GitHub auto-update support
- Includes Qualtrics heatmap override with comprehensive mock data
- Support for both fetch() and XMLHttpRequest interception
- Page-specific override patterns
- Console logging and debugging features

## Troubleshooting

### Script Not Working
1. Check that Tampermonkey is enabled
2. Verify the script is active in Tampermonkey dashboard
3. Check browser console for error messages
4. Ensure you're on a supported domain

### Not Receiving Updates
1. Verify version number was incremented in the script
2. Check Tampermonkey settings for auto-update configuration
3. Manually check for updates: Tampermonkey Dashboard → Utilities → "Check for userscript updates"

### Manual Update Check
1. Click Tampermonkey icon
2. Go to Dashboard
3. Click "Utilities" tab
4. Click "Check for userscript updates"

## Development

### Local Testing
The script runs at document-start to ensure it intercepts requests before they're made. All activity is logged to the browser console for debugging.

### Contributing
1. Fork this repository
2. Make your changes
3. Test thoroughly on target domains
4. Submit a pull request with description of changes

## Support
For issues or questions, please create an issue in this repository.

---

**Note**: This script is for development and testing purposes. Use responsibly and ensure you have permission to modify request responses on the target domains.