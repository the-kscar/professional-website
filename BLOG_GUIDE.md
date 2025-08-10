# Blog Management Guide

## Adding New Blog Posts

### Step 1: Create Your Post
1. Copy the template file `blog/posts/trails-to-tech-resilience.html`
2. Rename it with your new post slug (e.g., `new-post-title.html`)
3. Update the content, title, meta description, and tags

### Step 2: Update Blog Index
1. Open `blog/index.html`
2. Copy the sample blog post card (currently hidden)
3. Update the details and make it visible
4. Add it to the blog posts section

### Step 3: Template Structure

Each blog post should follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Post Title | Karen Scarbrough</title>
    <meta name="description" content="Brief description of your post">
    <!-- ... rest of head ... -->
</head>
```

## Blog Post Ideas

### Technology & Microsoft
- "Building Scalable Systems at Microsoft"
- "Lessons from Azure Cloud Architecture" 
- "The Art of Technical Program Management"
- "Innovation in Enterprise Software"

### Trail Running & Fitness
- "Training Plans for Busy Professionals"
- "Mental Strategies for Long Distance Running"
- "Balancing Tech Career and Athletic Goals"
- "Race Day Lessons for Project Delivery"

### Professional Development
- "From Supply Chain to Software: Career Transitions"
- "Leading Teams Through Uncertainty"
- "The Microsoft Culture: What I've Learned"
- "Work-Life Integration in Tech"

### Personal Stories
- "Why I Joined Microsoft"
- "My First Ultramarathon Experience"
- "Lessons from the Enterprise Ethereum Alliance"
- "Finding Balance in a Fast-Paced World"

## SEO Best Practices

### Title Tags
- Keep under 60 characters
- Include your main keyword
- Make it compelling and specific

### Meta Descriptions
- 150-160 characters
- Include a call to action
- Summarize the post value

### Content Structure
- Use H2 and H3 tags for subheadings
- Include internal links to other posts/pages
- Add relevant tags for each post
- Use proper paragraph structure

## Publishing Workflow

1. **Write** your post in the HTML template
2. **Review** for spelling, grammar, and formatting
3. **Update** the blog index page with your new post
4. **Commit** and push to GitHub
5. **Share** on LinkedIn, Twitter, etc.

## Future Enhancements

As your blog grows, consider:
- Adding a search function
- Implementing categories/tags filtering
- Adding social media sharing buttons
- Including a newsletter signup
- Adding comment functionality (via Disqus or similar)
- Analytics tracking (Google Analytics)

## Quick Post Template

Copy this basic structure for new posts:

```html
<div class="blog-post-card">
    <div class="blog-post-content">
        <div class="blog-post-meta">
            <span><i class="fas fa-calendar"></i> [Date]</span>
            <span><i class="fas fa-clock"></i> [X] min read</span>
        </div>
        <h2 class="blog-post-title">
            <a href="posts/[post-slug].html">[Post Title]</a>
        </h2>
        <p class="blog-post-excerpt">
            [Brief excerpt of your post...]
        </p>
        <div class="blog-post-tags">
            <a href="#" class="blog-tag">[Tag1]</a>
            <a href="#" class="blog-tag">[Tag2]</a>
        </div>
        <a href="posts/[post-slug].html" class="read-more">
            Read More <i class="fas fa-arrow-right"></i>
        </a>
    </div>
</div>
```

Happy blogging! 🚀
