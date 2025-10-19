# MVisible TechCos - Mobility Solutions Website

![MVisible TechCos Website](https://imgix.cosmicjs.com/b0003ab0-acf7-11f0-9a9f-8120f5e50ee7-photo-1553877522-43269d4ea984-1760884025385.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional website for MVisible TechCos - an emerging virtual Chief Mobility Officer solution provider specializing in wireless procurement and tech solutions for enterprise organizations.

## ✨ Features

- **Dynamic Services Showcase** - Automatically displays your services with rich HTML descriptions and markdown benefits
- **Client Success Stories** - Compelling case studies with measurable ROI and results
- **Resource Center** - Ready to host whitepapers, guides, blog posts, and industry reports
- **Mobile-First Design** - Fully responsive layout optimized for all devices
- **Lightning Fast** - Built with Astro for optimal performance and SEO
- **Easy Content Management** - All content managed through Cosmic CMS
- **Professional Design** - Clean, corporate aesthetic emphasizing trust and expertise

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68f4f42e1aef143b4bede631&clone_repository=68f4fed71aef143b4bede654)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "This is an emerging Techcos service provider, we provide virtual Chief Mobility Officer solutions in assisting companies in sourcing and procurement of wireless and tech solutions."

### Code Generation Prompt

> Set up an Astro website powered by my existing content

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies

- **[Astro](https://astro.build)** - Modern static site builder
- **[Cosmic](https://www.cosmicjs.com)** - Headless CMS for content management
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe development
- **[Bun](https://bun.sh)** - Fast JavaScript runtime and package manager

## 🚀 Getting Started

### Prerequisites

- Bun installed on your machine ([Installation Guide](https://bun.sh/docs/installation))
- A Cosmic account with your bucket set up
- Node.js 18+ (required by Astro)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd mvisible-techcos-website
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. **Start the development server**
   ```bash
   bun run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:4321`

## 📚 Cosmic SDK Examples

### Fetching Services

```typescript
import { cosmic } from '../lib/cosmic'

// Get all services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Get a single service
const { object: service } = await cosmic.objects
  .findOne({ type: 'services', slug: 'virtual-chief-mobility-officer' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Case Studies with Related Services

```typescript
// Case studies automatically include related services with depth=1
const { objects: caseStudies } = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Access related services
caseStudies.forEach(study => {
  const relatedServices = study.metadata.related_services
  // These are full service objects, not just IDs
})
```

## 🌐 Cosmic CMS Integration

Your content structure includes:

### Services Object Type
- Service Name (text)
- Description (HTML textarea)
- Key Benefits (markdown)
- Featured Image (file)
- Service Category (select-dropdown: Virtual CMO, Wireless Procurement, Tech Sourcing, Consulting)
- Pricing Model (text)

### Case Studies Object Type
- Client Name (text)
- Industry (text)
- Challenge (HTML textarea)
- Solution (HTML textarea)
- Results (HTML textarea)
- Cost Savings (text)
- Featured Image (file)
- Related Services (objects relationship to services)

### Resources Object Type
- Title (text)
- Content (markdown)
- Resource Type (select-dropdown: Whitepaper, Guide, Blog Post, Case Study, Industry Report)
- Featured Image (file)
- Download File (file)
- Published Date (date)

All content is managed through your Cosmic dashboard and automatically reflected on the website.

## 📦 Deployment Options

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Add your environment variables in the Netlify dashboard
4. Set build command: `bun run build`
5. Set publish directory: `dist`
6. Deploy!

### Environment Variables for Production

Make sure to set these environment variables in your hosting platform:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## 📝 Project Structure

```
/
├── public/
│   └── dashboard-console-capture.js
├── src/
│   ├── components/
│   │   ├── CosmicBadge.astro
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── ServiceCard.astro
│   │   └── CaseStudyCard.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── services/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── case-studies/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── resources/
│   │       └── index.astro
│   ├── lib/
│   │   └── cosmic.ts
│   └── types.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎨 Customization

### Styling

The website uses Tailwind CSS for styling. Customize colors and theme in `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1e40af',
      secondary: '#3b82f6',
      // Add your custom colors
    }
  }
}
```

### Content

All content is managed through your Cosmic CMS dashboard. Simply add, edit, or remove content there, and it will automatically appear on your website.

## 📄 License

This project is open source and available under the MIT License.

<!-- README_END -->