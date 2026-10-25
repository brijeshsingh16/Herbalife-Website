# Herbalife Website

A responsive, single-page Herbalife products website built with plain **HTML, CSS and JavaScript**. No frameworks and no Bootstrap. It has a warm cream and green theme, a products page with a category sidebar, and a contact form that sends messages to WhatsApp.

**Live site:** [herbalife.vercel.app](https://herbalife.vercel.app)

## Features

- **One-page home** with Home, Popular Products, About, Testimonials and Contact sections, all reachable from one navbar.
- **Products page** with the product list grouped by category on the left, and the product image and details on the right.
- **Shareable product links**, for example `pages/products.html#cell-activator`.
- **WhatsApp enquiry** button on every product, and a contact form that opens a ready-made WhatsApp message.
- **Mobile friendly**: the navbar slides in from the right, and the product list opens as a drawer on small screens.
- **Custom logo and favicon** (SVG). Clicking the logo returns to the top of the home page.
- **Easy to edit**: all products live in one data file.

## Tech stack

- HTML5
- CSS3 (custom properties, grid and flexbox)
- Vanilla JavaScript (no libraries)
- [Font Awesome](https://fontawesome.com/) icons and [Google Fonts](https://fonts.google.com/) (Fraunces and Nunito Sans), loaded from a CDN

## Project structure

```
.
├── index.html              Home page (all sections)
├── README.md
├── css/
│   ├── index.css           Shared styles: navbar, footer, buttons, cards, home sections
│   └── product.css         Products page styles
├── js/
│   ├── index.js            Shared code: navbar, popular products, contact form, logo click
│   ├── product.js          Products page: sidebar, product details, mobile drawer
│   └── products-data.js    Product list (edit this to add or change products)
├── pages/
│   ├── products.html       Products page
│   ├── about.html          Redirects to index.html#about
│   └── contact.html        Redirects to index.html#contact
└── photo/
    ├── logo.svg            Logo for the navbar and footer
    ├── favicon.svg         Browser tab icon
    ├── favicon-32.png      Tab icon fallback
    ├── apple-touch-icon.png  Icon for iPhone home screens
    └── ...                 Product images, poster.jpg and herbal.webp
```

## Getting started

1. Clone the repository:

   ```bash
   git clone https://github.com/brijeshsingh16/Herbalife-Website.git
   cd Herbalife-Website
   ```

2. Open `index.html` in your browser, or run a small local server:

   ```bash
   python3 -m http.server 8000
   ```

   Then visit <http://localhost:8000>.

An internet connection is needed for the icons and fonts. Without it the site still works, but the icons will not show.

## Customisation

### Add or edit a product

Open `js/products-data.js`. Products are grouped into categories:

```js
{ id: "cell-activator", name: "Cell Activator", image: "photo/cell.webp",
  desc: "Antioxidant support for a healthy ageing.",
  details: ["Optional point one", "Optional point two"] }
```

| Field     | Required | Notes                                                |
|-----------|----------|------------------------------------------------------|
| `id`      | Yes      | Unique, lowercase, no spaces. Used in the product link. |
| `name`    | Yes      | Product name.                                        |
| `image`   | Yes      | Path to the image in `photo/`.                       |
| `desc`    | Yes      | Short description.                                   |
| `details` | No       | List of bullet points shown as "Key points".         |

### Change the popular products

At the top of `js/index.js`, edit `POPULAR_IDS` with the `id` values of the products you want on the home page.

### Change the WhatsApp number

At the top of `js/index.js`, edit `WHATSAPP_NUMBER`. Use the country code and no `+`, for example `917376874710`.

### Change colours

All colours are variables in the `:root` block at the top of `css/index.css` (`--cream`, `--paper`, `--green` and so on).

### Change the logo

Replace `photo/logo.svg` (navbar and footer) and `photo/favicon.svg` (browser tab), keeping the same file names. If you change the favicon, also replace `favicon-32.png` and `apple-touch-icon.png`.

### Edit page text

The About, Testimonials, Contact and footer text is in `index.html`. The testimonials, statistics and company timeline are sample content, so replace them with your own.

## Deployment

The live site is hosted on [Vercel](https://vercel.com) at [herbalife.vercel.app](https://herbalife.vercel.app). It is a static site, so no build step is needed.

**Deploy on Vercel**

1. Sign in to Vercel and choose **Add New → Project**.
2. Import the `brijeshsingh16/Herbalife-Website` repository.
3. Leave the framework as **Other**, with no build command and the root folder as the output directory.
4. Click **Deploy**. Every push to `main` is then published automatically.

**Or deploy on GitHub Pages**

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and the `/ (root)` folder, then save.
3. The site will be at `https://brijeshsingh16.github.io/Herbalife-Website/`.

All links in the project are relative, so it works from the site root or from a repository sub-path.

## Browser support

Works in current versions of Chrome, Edge, Firefox and Safari.

## Author

Created by [brijeshsingh16](https://github.com/brijeshsingh16).
