# CORS Issue Fix for COMBEST Cleaning Services Website

## Problem
The careers.html form submission is failing due to CORS (Cross-Origin Resource Sharing) errors when opening the HTML file directly in a browser (file:// protocol).

## Error Message
```
Access to XMLHttpRequest at 'https://firebasestorage.googleapis.com/...' from origin 'null' has been blocked by CORS policy
```

## Solutions

### Solution 1: Use the Local Development Server (Recommended)

1. **Windows Users:**
   - Double-click `start_server.bat`
   - Or open Command Prompt and run: `python server.py`

2. **Mac/Linux Users:**
   - Open Terminal and run: `python3 server.py`
   - Or make the script executable: `chmod +x start_server.sh` then `./start_server.sh`

3. **Access the website:**
   - Open your browser and go to: `http://localhost:8000/careers.html`
   - The form should now work properly

### Solution 2: Upload to a Web Server

Upload all files to a web hosting service like:
- GitHub Pages
- Netlify
- Vercel
- Any web hosting provider

### Solution 3: Use the Fallback Method

If you encounter CORS errors, the form will automatically show a fallback option that:
- Opens your email client with pre-filled application details
- Provides direct contact information

## Files Included

- `server.py` - Python HTTP server with CORS headers
- `start_server.bat` - Windows batch file to start server
- `start_server.sh` - Unix/Linux shell script to start server
- `careers.html` - Updated with CORS detection and fallback

## Technical Details

The CORS error occurs because:
1. Browsers block requests from `file://` protocol to external APIs
2. Firebase Storage requires proper origin headers
3. Local files have origin `null` which is blocked by CORS policy

The local server solution:
1. Serves files via HTTP protocol
2. Adds proper CORS headers
3. Allows Firebase integration to work properly

## Testing

1. Start the local server
2. Open `http://localhost:8000/careers.html`
3. Fill out the application form
4. Submit and check browser console for success messages
5. Verify data appears in Firebase console

## Support

If you continue to have issues:
1. Check browser console for error messages
2. Ensure Python is installed on your system
3. Try using a different port if 8000 is busy
4. Contact the developer for assistance



