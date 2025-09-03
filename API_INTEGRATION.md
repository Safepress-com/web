# API Integration Setup Guide

## Overview

The contact forms have been integrated with the API endpoint. This guide explains how to configure and use the integration.

## Environment Configuration

Create a `.env` file in the project root with the following variables:

```env
# API Configuration (optional - uses production by default)
VITE_API_BASE_URL=https://api.safepress.com

# For local development, you can override to use local API:
# VITE_API_BASE_URL=http://localhost:3000/api
```

## Features Implemented

### ✅ API Integration
- Contact form submissions now use the proper API endpoint
- Full error handling for network issues, validation errors, and rate limiting
- Automatic form field mapping between UI and API formats

### ✅ Enhanced Validation
- Client-side validation for all required fields
- Field length validation according to API specifications:
  - Full Name: max 100 characters
  - Company: max 100 characters
  - Email: valid email format
  - Telegram: max 50 characters
  - How can we help: max 200 characters
  - Message: max 1000 characters

### ✅ Error Handling
- **Rate Limiting**: Shows retry time when rate limited (429 error)
- **Validation Errors**: Displays specific field validation issues
- **Network Errors**: Handles connection problems gracefully
- **Server Errors**: Generic error message for unexpected issues

### ✅ User Experience
- Loading states during form submission
- Success messages with auto-reset
- Real-time field validation
- Character limits on input fields

## API Endpoint Mapping

The forms now map to the API as follows:

| Form Field | API Field | Type | Required | Max Length |
|------------|-----------|------|----------|------------|
| name | fullName | string | ✅ | 100 |
| company | company | string | ✅ | 100 |
| email | email | string | ✅ | - |
| telegram | telegram | string | ⭕ | 50 |
| helpType + otherHelp | howCanWeHelp | string | ✅ | 200 |
| message | message | string | ⭕ | 1000 |

## Testing

To test the integration:

1. The forms now connect to `https://api.safepress.com` by default
2. Fill out and submit a contact form
3. Check the browser console for any error messages
4. Verify the submission appears in your API database

## Rate Limiting

The API implements rate limiting (3 requests per 15 minutes per IP). The forms will:
- Show a rate limit error message when exceeded
- Display the retry time in minutes
- Prevent form submission until the limit resets

## Files Modified

- **src/services/api.ts** - New API service layer
- **src/utils/formMapper.ts** - Form data mapping utilities
- **src/components/sections/Contact.tsx** - Main contact section
- **src/components/ui/ContactForm.tsx** - Modal contact form

## Development

The API configuration uses environment variables, so you can easily switch between development and production endpoints without code changes.

By default, the forms connect to the production API at `https://api.safepress.com`. For local development, you can override this by setting `VITE_API_BASE_URL=http://localhost:3000/api` in your `.env` file.