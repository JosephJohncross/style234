# Hero Carousel Images

## Required Images

Place **six hero images** in this directory (3 for mobile, 3 for desktop):

### Mobile Images (Portrait, centered on white background)
- `hero-1-mobile.jpg` - First carousel image (mobile)
- `hero-2-mobile.jpg` - Second carousel image (mobile)
- `hero-3-mobile.jpg` - Third carousel image (mobile)

### Desktop Images (Landscape/wide, full-screen background)
- `hero-1-desktop.jpg` - First carousel image (desktop)
- `hero-2-desktop.jpg` - Second carousel image (desktop)
- `hero-3-desktop.jpg` - Third carousel image (desktop)

## Image Specifications

### Mobile Images
- **Aspect Ratio**: 3:4 (Portrait)
- **Recommended Size**: 600x800 pixels or higher
- **Format**: JPG or PNG
- **Style**: Centered subject with clean background, like the screenshot provided
- **Theme**: Nigerian fashion models in Ankara prints

### Desktop Images
- **Aspect Ratio**: 16:9 or wider (Landscape)
- **Recommended Size**: 1920x1080 pixels or higher
- **Format**: JPG or PNG
- **Style**: Full-screen background, model can be positioned left or right
- **Theme**: Same as mobile but wider composition

## How to Activate Images

Once you add your images here:

1. **For Mobile**: Uncomment lines 114-118 in `/components/hero-carousel.tsx`
2. **For Desktop**: Uncomment lines 152-156 in `/components/hero-carousel.tsx`
3. Remove the placeholder `<div>` elements

## Layout Behavior

- **Mobile**: Text appears at top, image centered below on white background
- **Desktop**: Image is full-screen background, text overlays on the left with white gradient
- Auto-slides every 5 seconds with smooth fade transitions
