# COMBEST Admin Panel - Email Activity Logging Setup Guide

## Overview
Your admin panel now includes a comprehensive email logging system that tracks all admin activities and sends email notifications. This system logs every action performed in the admin panel and can send real-time email alerts.

## Features Added

### 🔍 Activity Tracking
- **Login/Logout**: Tracks when admins log in and out
- **CRUD Operations**: Logs Create, Read, Update, Delete operations
- **Status Changes**: Tracks visibility toggles and status updates
- **Detailed Information**: Captures admin details, timestamps, and action context
- **CSV Downloads**: Export activity history for external analysis

### 📧 Email Notifications
- **Real-time Alerts**: Instant email notifications for all activities
- **Configurable**: Easy setup through admin interface
- **Professional Templates**: Well-formatted email notifications
- **Error Handling**: Graceful fallback if email service is unavailable

### 📊 Activity Dashboard
- **Professional Table Layout**: Clean, organized table view of all activities
- **Statistics**: Real-time stats showing total activities, emails sent, and today's activities
- **Advanced Filtering**: Filter by activity type and date range
- **CSV Export**: Download complete activity history
- **Secure Design**: No delete buttons for security (logs are permanent)

### 🔒 Enhanced Security
- **Auto-logout**: Automatic logout after 10 minutes of inactivity
- **Session Management**: Smart session handling with activity detection
- **Persistent Login**: Maintains login state across page refreshes
- **Warning System**: 30-second warning before auto-logout with option to extend

## Setup Instructions

### Step 1: EmailJS Account Setup
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{admin_name}}` - Admin name
   - `{{activity_action}}` - Action performed (LOGIN, CREATE, UPDATE, etc.)
   - `{{activity_type}}` - Type of item (TESTIMONIALS, JOBS, etc.)
   - `{{item_name}}` - Name of the item affected
   - `{{admin_email}}` - Admin's email address
   - `{{timestamp}}` - When the action occurred
   - `{{details}}` - Additional details about the action
   - `{{user_agent}}` - Browser information

### Step 2: Email Template Example
```html
Subject: COMBEST Admin Activity Alert - {{activity_action}}

Dear {{admin_name}},

An admin activity has been recorded in the COMBEST Admin Panel:

🔹 Action: {{activity_action}}
🔹 Type: {{activity_type}}
🔹 Item: {{item_name}}
🔹 Admin: {{admin_email}}
🔹 Time: {{timestamp}}

Details:
{{details}}

Browser: {{user_agent}}

This is an automated notification from the COMBEST Admin Panel.

Best regards,
COMBEST Admin System
```

### Step 3: Configure Email in Admin Panel
1. Log into your admin panel
2. Navigate to "Activity Logs" section
3. Click "Configure Email" button
4. Enter your EmailJS credentials:
   - **Service ID**: From your EmailJS service
   - **Template ID**: From your EmailJS template
   - **Public Key**: Your EmailJS public key
   - **Notification Email**: Where to send alerts
   - **Admin Name**: Your name for emails
5. Click "Save Configuration"
6. Test the setup using "Test Email Service" button

### Step 4: Verify Setup
1. Perform any admin action (create, update, delete, etc.)
2. Check your email for the notification
3. View the activity in the "Activity Logs" section
4. Verify statistics are updating correctly

## Activities That Are Logged

### Authentication
- ✅ Admin login
- ✅ Admin logout (manual and auto-logout)

### Content Management
- ✅ Create testimonial/team member/job/gallery item
- ✅ Update testimonial/team member/job/gallery item
- ✅ Delete testimonial/team member/job/gallery item
- ✅ Toggle visibility status
- ✅ Update application status

### System Activities
- ✅ Email configuration changes
- ✅ Email test sends
- ✅ CSV downloads
- ✅ Session extensions

## New Features Usage

### CSV Download
1. Navigate to "Activity Logs" section
2. Click "Download CSV" button
3. File will be automatically downloaded with current date
4. Contains all activity data with timestamps and details

### Auto-Logout System
- **10-minute timeout**: Automatic logout after 10 minutes of inactivity
- **Activity detection**: Mouse movement, clicks, scrolls reset the timer
- **30-second warning**: Warning popup appears 30 seconds before logout
- **Session extension**: Click "Stay Logged In" to extend for another 10 minutes
- **Persistent login**: Login state maintained across page refreshes

### Professional Table View
- **Organized columns**: Time, Action, Type, Item, Admin, Details
- **Color-coded badges**: Different colors for different action types
- **Responsive design**: Works on mobile and desktop
- **Hover effects**: Enhanced user experience
- **Filtering**: Filter by action type and date range

## Security Features

### Data Protection
- IP addresses are hidden for privacy
- Sensitive data is not logged in plain text
- Activity logs can be deleted by admins
- Email credentials stored locally (not in database)

### Access Control
- Only authenticated admins can view logs
- Email configuration requires admin access
- Activity deletion requires confirmation

## Troubleshooting

### Email Not Sending
1. Check EmailJS configuration in admin panel
2. Verify EmailJS service is active
3. Check email template variables match
4. Test with "Test Email Service" button
5. Check browser console for errors

### Activities Not Logging
1. Check Firebase connection
2. Verify admin is logged in
3. Check browser console for errors
4. Ensure Firebase rules allow writing to 'activityLogs' collection

### Performance
- Logs are stored in Firebase with automatic indexing
- Email sending is asynchronous (won't slow down admin actions)
- Old logs can be manually deleted to maintain performance

## Firebase Rules Update
Add this rule to your Firebase Security Rules:

```javascript
// Allow authenticated users to read/write activity logs
match /activityLogs/{document} {
  allow read, write: if request.auth != null;
}
```

## Benefits

### Security Monitoring
- Track all admin activities
- Detect unauthorized access
- Monitor system usage patterns
- Audit trail for compliance

### Operational Awareness
- Real-time notifications of important changes
- Quick identification of issues
- Better team coordination
- Historical activity tracking

### Professional Management
- Automated documentation
- Reduced manual oversight
- Improved accountability
- Enhanced system reliability

## Support
If you encounter any issues with the email logging system:
1. Check the browser console for error messages
2. Verify EmailJS configuration
3. Test Firebase connectivity
4. Review the setup steps above

The system is designed to be robust and will continue working even if email delivery fails temporarily.
