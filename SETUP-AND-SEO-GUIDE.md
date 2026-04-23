# J.P. Nadar Website — Complete Setup & SEO Guide

## 📁 Files Included

| File | Description |
|------|-------------|
| `index.html` | Homepage with hero, services, client carousel, contact form, footer |
| `restaurant-solutions.html` | Restaurant Solutions service page |
| `pos-systems.html` | POS Systems service page |
| `online-ordering.html` | Online Ordering service page |
| `card-machines.html` | Card Machines service page |
| `digital-marketing.html` | Digital Marketing service page |
| `google-apps-script.js` | Google Apps Script for form → Google Sheets |

---

## 🔧 Step 1: Set Up the Contact Form (Google Sheets)

The contact form saves enquiries directly to a Google Spreadsheet. Here's how:

### A. Create the Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet → name it **"JP Nadar Enquiries"**
3. In **Row 1**, add these exact column headers:
   - `Timestamp` | `Name` | `Email` | `Phone` | `Service` | `Message`
4. Copy the **Spreadsheet ID** from the URL:
   - URL looks like: `https://docs.google.com/spreadsheets/d/`**`1BxiMV...`**`/edit`
   - The bold part is your Spreadsheet ID

### B. Set Up Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Click **New Project**
3. Delete all existing code
4. Paste the entire contents of `google-apps-script.js`
5. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual Spreadsheet ID
6. Replace `hello@jpnadar.com` with the email you want notifications sent to
7. Click **Save** (Ctrl+S)

### C. Deploy as Web App
1. Click **Deploy** → **New Deployment**
2. Click the gear icon next to "Type" → select **Web App**
3. Set:
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Copy the **Web App URL** (looks like `https://script.google.com/macros/s/AKfycb...../exec`)

### D. Connect to the Website
1. Open `index.html`
2. Find this line:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace it with your Web App URL:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_URL/exec';
   ```
4. Save the file

✅ **Done!** Every form submission will now appear in your Google Sheet AND send you an email notification.

---

## 🌐 Step 2: Host the Website

### Option A: Netlify (Free & Easiest)
1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Drag and drop your entire `jpnadar` folder onto the Netlify dashboard
3. Get an instant URL like `jpnadar.netlify.app`
4. Add your custom domain in Settings → Domain Management

### Option B: GitHub Pages (Free)
1. Create a GitHub account and new repository named `jpnadar`
2. Upload all HTML files to the repository
3. Go to Settings → Pages → Branch: main → Save
4. Your site is live at `yourusername.github.io/jpnadar`

### Option C: Traditional Web Hosting
Upload all HTML files to your hosting provider's `public_html` or `www` folder via FTP/cPanel.

---

## 🔍 Step 3: SEO Setup

### A. Update Meta Tags (Do This For Every Page)
In each HTML file, update these in the `<head>`:

```html
<!-- Replace with your actual domain -->
<meta property="og:url" content="https://www.jpnadar.com" />
<meta property="og:image" content="https://www.jpnadar.com/og-image.jpg" />
<link rel="canonical" href="https://www.jpnadar.com/" />
```

### B. Create a sitemap.xml
Create a file named `sitemap.xml` in your root folder:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.jpnadar.com/</loc><priority>1.0</priority></url>
  <url><loc>https://www.jpnadar.com/restaurant-solutions.html</loc><priority>0.8</priority></url>
  <url><loc>https://www.jpnadar.com/pos-systems.html</loc><priority>0.8</priority></url>
  <url><loc>https://www.jpnadar.com/online-ordering.html</loc><priority>0.8</priority></url>
  <url><loc>https://www.jpnadar.com/card-machines.html</loc><priority>0.8</priority></url>
  <url><loc>https://www.jpnadar.com/digital-marketing.html</loc><priority>0.8</priority></url>
</urlset>
```

### C. Create a robots.txt
Create a file named `robots.txt` in your root folder:

```
User-agent: *
Allow: /
Sitemap: https://www.jpnadar.com/sitemap.xml
```

### D. Add Structured Data (Schema.org)
Add this JSON-LD inside the `<head>` of `index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "J.P. Nadar",
  "description": "Complete digital solutions for restaurants — POS systems, online ordering, card machines, and digital marketing.",
  "url": "https://www.jpnadar.com",
  "telephone": "+44-7700-000000",
  "email": "hello@jpnadar.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressCountry": "GB"
  },
  "sameAs": [
    "https://www.facebook.com/jpnadar",
    "https://www.instagram.com/jpnadar",
    "https://www.linkedin.com/company/jpnadar"
  ],
  "serviceArea": {
    "@type": "Country",
    "name": "United Kingdom"
  }
}
</script>
```

### E. Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (your domain)
3. Verify ownership (add the meta tag they give you to your `<head>`)
4. Submit your sitemap URL

### F. Google Business Profile
1. Go to [business.google.com](https://business.google.com)
2. Set up your Google Business Profile for J.P. Nadar
3. Add your website URL, phone, and description
4. This is the single biggest factor for local SEO

---

## 🎨 Step 4: Customise Client Carousel

In `index.html`, find the `clients` array in the `<script>` tag and update it:

```javascript
const clients = [
  { name: 'Your Client Name', type: 'Restaurant Type', initial: 'AB', url: 'https://client-website.com', color: '#7C3AED' },
  // Add more clients here...
];
```

- `name`: Client restaurant name
- `type`: Type of restaurant
- `initial`: 1-2 letters shown in the logo circle
- `url`: Client's website (opens in new tab when clicked)
- `color`: Hex colour for their logo background

---

## 📱 Step 5: Update Contact Details

Search and replace across all HTML files:
- `hello@jpnadar.com` → your real email
- `+44 7700 000000` → your real phone number
- `London, United Kingdom` → your real address

---

## 📊 Step 6: Google Analytics

Add this inside the `<head>` of every HTML page (replace `G-XXXXXXXXXX` with your GA4 ID):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✅ Launch Checklist

- [ ] Google Sheets created with correct headers
- [ ] Apps Script deployed as Web App
- [ ] `GOOGLE_SCRIPT_URL` updated in index.html
- [ ] Contact details updated in all 6 pages
- [ ] Social media links updated in all 6 pages
- [ ] Client carousel updated with real clients
- [ ] Website uploaded to hosting
- [ ] Custom domain connected
- [ ] SSL certificate active (HTTPS)
- [ ] sitemap.xml created and uploaded
- [ ] robots.txt created and uploaded
- [ ] Google Search Console set up
- [ ] Sitemap submitted to Search Console
- [ ] Google Business Profile created
- [ ] Google Analytics added
- [ ] Schema.org markup added

---

## 🆘 Support

For any issues, contact your web developer or raise a ticket with your hosting provider.
