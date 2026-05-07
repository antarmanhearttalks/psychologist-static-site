# Antarman-heart talks Static Site

Standalone static website for a psychologist / counselling clinic with WhatsApp appointment booking.

## Files

- `index.html` - page structure
- `styles.css` - responsive styling
- `app.js` - services rendering, WhatsApp URL builder, and form handling
- `assets/hero-counselling-room.png` - generated hero image

## Run Locally

Open `index.html` directly in a browser.

For a local server:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080` from this folder.

## Customize

Update the `clinic` object in `app.js`:

```js
const clinic = {
  psychologistName: "Dr. Priyanka Atreja",
  clinicName: "Antarman-heart talks",
  phone: "+91 8700434297",
  whatsappNumber: "918700434297",
  email: "antarmanhearttalks@gmail.com",
  city: "Noida, Delhi NCR",
};
```

Use the international WhatsApp number format without spaces or plus sign.

Also update the domain placeholder before launch:

- `index.html`: canonical URL, Open Graph URL, Open Graph image, schema `url`, schema `image`
- `robots.txt`: sitemap URL
- `sitemap.xml`: page URL
- `CNAME`: custom domain for GitHub Pages

Current placeholder domain:

```text
https://antarmanhearttalks.com/
```

## SEO Launch Checklist

- Replace clinic name, psychologist name, phone, WhatsApp number, email, and city.
- Replace placeholder domain with the final purchased domain.
- Add the exact clinic address if the psychologist wants local Google ranking.
- Create or update the Google Business Profile with the same name, phone, address, and website.
- Deploy the static files to Vercel, Netlify, or GitHub Pages.
- Add the site to Google Search Console and submit `sitemap.xml`.
