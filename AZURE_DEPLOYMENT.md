# Azure Static Web Apps Deployment Guide

## 🚀 Deploy Your Portfolio to Azure Static Web Apps

### Prerequisites
- ✅ Azure account (get free credits at [azure.com](https://azure.com))
- ✅ GitHub repository (already set up: `the-kscar/professional-website`)
- ✅ Code pushed to GitHub (completed!)

## Step-by-Step Deployment

### 1. Access Azure Portal
1. Go to [portal.azure.com](https://portal.azure.com)
2. Sign in with your Microsoft account
3. Click **"Create a resource"**

### 2. Create Static Web App
1. Search for **"Static Web Apps"**
2. Click **"Create"**
3. Fill in the details:
   - **Subscription**: Choose your subscription
   - **Resource Group**: Create new → `rg-karens-portfolio`
   - **Name**: `karens-portfolio-website`
   - **Plan type**: Free (perfect for personal portfolios)
   - **Region**: Choose closest to you (e.g., "East US 2")

### 3. Configure GitHub Integration
1. **Source**: GitHub
2. **Organization**: `the-kscar`
3. **Repository**: `professional-website`
4. **Branch**: `main`

### 4. Build Configuration
1. **Build Presets**: Custom
2. **App location**: `/` (root directory)
3. **Api location**: *(leave empty)*
4. **Output location**: *(leave empty)*

### 5. Complete Deployment
1. Click **"Review + create"**
2. Click **"Create"**
3. Wait for deployment (2-3 minutes)
4. Azure will automatically:
   - Create a GitHub Action workflow
   - Build and deploy your site
   - Provide you with a live URL

## 🎯 What Happens Next

### Automatic Deployment
- Azure creates a `.github/workflows/azure-static-web-apps-[random].yml` file
- Every push to `main` branch triggers automatic deployment
- Build and deployment typically takes 2-3 minutes

### Your Live URLs
- **Main site**: `https://[random-name].azurestaticapps.net`
- **Blog**: `https://[random-name].azurestaticapps.net/blog`
- **Admin**: `https://[random-name].azurestaticapps.net/admin`

## 📝 Set Up Blogging with Decap CMS

### Step 1: GitHub OAuth App (Required for CMS)
1. Go to GitHub.com → Settings → Developer settings → OAuth Apps
2. Click **"New OAuth App"**
3. Fill in:
   - **Application name**: `Karen's Portfolio CMS`
   - **Homepage URL**: `https://[your-azure-url].azurestaticapps.net`
   - **Authorization callback URL**: `https://[your-azure-url].azurestaticapps.net/admin`
4. Click **"Register application"**
5. Copy the **Client ID** and **Client Secret**

### Step 2: Configure CMS Authentication
1. Go to your Azure Static Web App in the portal
2. Navigate to **Configuration** → **Environment variables**
3. Add these variables:
   - `GITHUB_CLIENT_ID`: [Your Client ID]
   - `GITHUB_CLIENT_SECRET`: [Your Client Secret]

### Step 3: Start Blogging!
1. Visit `https://[your-url].azurestaticapps.net/admin`
2. Click **"Login with GitHub"**
3. Authorize the application
4. Start creating blog posts!

## 🎨 Custom Domain (Optional)

### Add Your Own Domain
1. In Azure portal, go to your Static Web App
2. Click **"Custom domains"**
3. Click **"Add"**
4. Choose **"Custom domain on other DNS"**
5. Enter your domain (e.g., `karens-portfolio.com`)
6. Follow DNS configuration instructions

## 📊 Monitoring & Analytics

### Built-in Features
- **Azure Monitor**: Built-in performance monitoring
- **Application Insights**: Advanced analytics (can be enabled)
- **GitHub Actions**: Deployment history and logs

### Optional: Add Google Analytics
Add this to your `<head>` section for visitor tracking:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔧 Advantages of Azure Static Web Apps

### Performance
- ✅ Global CDN distribution
- ✅ Automatic HTTPS
- ✅ Fast loading times worldwide

### Integration
- ✅ Seamless GitHub integration
- ✅ Automatic deployments
- ✅ Pull request previews

### Cost
- ✅ Free tier includes:
  - 100 GB bandwidth/month
  - 0.5 GB storage
  - Custom domains
  - SSL certificates

### Microsoft Ecosystem
- ✅ Perfect for your Microsoft background
- ✅ Azure Active Directory integration (if needed)
- ✅ Integration with other Azure services

## 🎯 Next Steps After Deployment

### 1. Test Your Site
- [ ] Visit main URL and test all sections
- [ ] Test blog listing page
- [ ] Test mobile responsiveness
- [ ] Test all contact links

### 2. Set Up CMS
- [ ] Create GitHub OAuth app
- [ ] Configure environment variables
- [ ] Test admin login
- [ ] Create your first blog post

### 3. Content Strategy
- [ ] Plan your first 3-5 blog posts
- [ ] Set up a posting schedule
- [ ] Share your blog on LinkedIn/Twitter

### 4. Optimization
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain (optional)
- [ ] Configure SEO meta tags

## 💡 Pro Tips

### Blog Content Ideas
- "Building Scalable Systems at Microsoft"
- "Trail Running Training Plans for Busy Professionals"
- "Lessons from Azure Cloud Architecture"
- "Mental Resilience: From Trails to Tech Teams"
- "Supply Chain Optimization in the Cloud Era"

### SEO Best Practices
- Use descriptive titles under 60 characters
- Write compelling meta descriptions
- Include relevant keywords naturally
- Link between your posts and main site sections

## 🆘 Troubleshooting

### Common Issues
1. **CMS not loading**: Check GitHub OAuth configuration
2. **Images not displaying**: Ensure correct paths in blog posts
3. **Build failures**: Check GitHub Actions tab for error details

### Support Resources
- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [GitHub OAuth Apps Guide](https://docs.github.com/en/developers/apps/building-oauth-apps)

---

Ready to deploy? Let's get your portfolio live on Azure! 🚀
