// Blog management utilities
class BlogManager {
    constructor() {
        this.posts = [];
        this.loadPosts();
    }

    // Load blog posts (in a real implementation, this would fetch from your CMS)
    async loadPosts() {
        // Sample posts - in production, this would fetch from your blog folder
        this.posts = [
            {
                title: "Trail Running at Microsoft: Finding Balance in Tech",
                date: "2025-01-15",
                summary: "How my passion for trail running enhances my work as a Senior Technical Program Manager at Microsoft, and why outdoor adventures make me a better tech professional.",
                thumbnail: "../running-photo.jpeg",
                rating: 5,
                tags: ["trail-running", "technology", "microsoft", "work-life-balance"],
                slug: "2025-01-15-trail-running-at-microsoft"
            }
        ];
    }

    // Render blog posts to the page
    renderBlogGrid(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const blogGrid = this.posts.map(post => `
            <div class="blog-card">
                <div class="blog-image">
                    <img src="${post.thumbnail}" alt="${post.title}">
                    <div class="blog-date">${this.formatDate(post.date)}</div>
                </div>
                <div class="blog-content">
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-summary">${post.summary}</p>
                    <div class="blog-tags">
                        ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="blog-rating">
                        <div class="stars">
                            ${this.renderStars(post.rating)}
                        </div>
                        <span>(${post.rating}/5)</span>
                    </div>
                    <a href="${post.slug}.html" class="read-more">Read More</a>
                </div>
            </div>
        `).join('');

        container.innerHTML = blogGrid;
    }

    // Helper function to format date
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    // Helper function to render star ratings
    renderStars(rating) {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars += '<i class="fas fa-star"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        return stars;
    }

    // Get latest posts for homepage
    getLatestPosts(count = 3) {
        return this.posts
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, count);
    }
}

// Initialize blog manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const blogManager = new BlogManager();
    
    // If we're on the blog page, render the blog grid
    const blogGrid = document.querySelector('.blog-grid');
    if (blogGrid) {
        setTimeout(() => {
            // blogManager.renderBlogGrid('blog-grid-container');
        }, 100);
    }
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BlogManager;
}
