# Blog Setup with Decap CMS

## Overview
Your portfolio website now includes a blog section powered by Decap CMS (formerly Netlify CMS). This allows you to create, edit, and manage blog posts through a user-friendly web interface.

## What's Been Added

### 1. File Structure
```
├── admin/
│   ├── config.yml      # Decap CMS configuration
│   └── index.html      # Admin interface
├── blog/
│   ├── index.html      # Blog listing page
│   ├── 2025-01-15-trail-running-at-microsoft.html  # Sample blog post
│   └── 2025-01-15-trail-running-at-microsoft.md    # Markdown source
├── blog-manager.js     # Blog management utilities
└── login.html          # Admin access page
```

### 2. Navigation Updates
- Added "Blog" link to main navigation
- Added blog link to footer
- Updated site structure to accommodate blog section

## Setup Instructions

### Step 1: Deploy to Netlify
1. Push your changes to GitHub (we'll do this together)
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub account and select your `professional-website` repository
5. Deploy the site

### Step 2: Enable Netlify Identity
1. In your Netlify dashboard, go to your site
2. Navigate to **Identity** tab
3. Click "Enable Identity"
4. Under **Settings & usage**, set:
   - Registration: "Invite only" (recommended)
   - Git Gateway: Enable this

### Step 3: Configure Git Gateway
1. In the Identity settings, scroll to **Services**
2. Click "Enable Git Gateway"
3. This allows Decap CMS to commit changes to your repository

### Step 4: Invite Yourself as Admin
1. In Identity tab, click "Invite users"
2. Enter your email address
3. You'll receive an invitation email

### Step 5: Access the CMS
1. Visit your site at `https://your-site-name.netlify.app/admin`
2. Login with your credentials
3. Start creating blog posts!

## Using the CMS

### Creating a New Blog Post
1. Go to `/admin` on your live site
2. Click "New Blog"
3. Fill in the form:
   - **Title**: Your blog post title
   - **Date**: Publication date
   - **Featured Image**: Upload or select an image
   - **Rating**: Rate your post 1-5 stars
   - **Body**: Write your content in Markdown
   - **Tags**: Add relevant tags
   - **Summary**: Brief description for the blog listing

### Publishing
1. Click "Publish" to make the post live immediately
2. Or save as "Draft" to publish later

## Blog Features

### What's Included
- ✅ Responsive blog listing page
- ✅ Individual blog post pages
- ✅ Tag system for categorization
- ✅ Star rating system
- ✅ Featured images
- ✅ Publication dates
- ✅ Clean, professional design
- ✅ Mobile-friendly layout
- ✅ SEO-friendly structure

### Content Fields
- **Title**: Main blog post title
- **Date**: Publication date and time
- **Featured Image**: Hero image for the post
- **Summary**: Short description for listings
- **Body**: Full blog content (Markdown supported)
- **Tags**: Categories and topics
- **Rating**: Personal rating system (1-5 stars)

## Customization Options

### Adding New Fields
Edit `/admin/config.yml` to add new fields like:
- Author information
- Reading time
- Categories
- Social sharing options

### Styling
- Blog styles are in the individual HTML files
- Main site styles in `styles.css` apply to navigation
- Customize colors, fonts, and layouts as needed

## Tips for Success

### Content Strategy
1. **Consistency**: Post regularly (weekly/bi-weekly)
2. **Topics**: Mix of professional insights and personal experiences
3. **Length**: Aim for 800-1500 words per post
4. **Images**: Always include engaging featured images

### SEO Best Practices
1. **Titles**: Clear, descriptive, and under 60 characters
2. **Summaries**: Compelling meta descriptions
3. **Tags**: Use relevant, consistent tags
4. **Internal linking**: Link between your posts and main site

### Sample Topics for Future Posts
- "Lessons from Leading Technical Teams"
- "The Intersection of AI and Trail Running"
- "Building Resilient Systems and Resilient Athletes"
- "Microsoft Azure Tips for Developers"
- "Trail Running Gear for Tech Professionals"
- "Remote Work and Outdoor Adventures"

## Technical Notes

### File Generation
- Each blog post creates both `.md` (source) and `.html` (display) files
- The `.md` files contain metadata and content
- The `.html` files are formatted for web display

### Backup Strategy
- All content is version controlled in Git
- Netlify provides additional backup through their CDN
- Consider periodic local backups of your content

## Next Steps
1. Deploy the updated site to Netlify
2. Configure Identity and Git Gateway
3. Create your first blog post through the CMS
4. Share your new blog with your network!

## Support
If you encounter any issues:
1. Check Netlify's documentation for Identity and Git Gateway
2. Ensure your GitHub repository permissions are correct
3. Verify the Decap CMS configuration in `admin/config.yml`

Your blog is now ready to help you share your expertise and experiences with the world! 🚀
