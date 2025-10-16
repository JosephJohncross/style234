# Favicon Setup for Style234

## Created Files

### 1. **icon.svg** (32x32)
- Browser favicon
- Automatically detected by Next.js App Router
- Green background (#029338) with white "S234" branding

### 2. **apple-icon.svg** (180x180)
- iOS home screen icon
- Larger format for Apple devices
- Same branding, optimized for mobile display

### 3. **manifest.json** (in /public)
- PWA (Progressive Web App) manifest
- Defines app name, colors, and icons
- Enables "Add to Home Screen" functionality

## How It Works

Next.js 13+ App Router automatically detects:
- `icon.svg` → Used as favicon
- `apple-icon.svg` → Used for Apple devices

The files are placed in `/app` directory and Next.js handles the rest!

## Browser Support

✅ **SVG favicons supported by:**
- Chrome/Edge 80+
- Firefox 41+
- Safari 9+

## Optional: Generate PNG Versions

If you need PNG fallbacks for older browsers, you can convert the SVG files:

### Using Online Tools:
1. Visit [CloudConvert](https://cloudconvert.com/svg-to-png) or similar
2. Upload `icon.svg`
3. Generate these sizes:
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `favicon-48x48.png`
   - `apple-touch-icon-180x180.png`

### Using Command Line (if you have ImageMagick):
```bash
# Generate favicon PNGs
convert icon.svg -resize 16x16 favicon-16x16.png
convert icon.svg -resize 32x32 favicon-32x32.png
convert icon.svg -resize 48x48 favicon-48x48.png

# Generate Apple touch icon
convert apple-icon.svg -resize 180x180 apple-touch-icon.png
```

## Branding Colors

- **Primary Green**: `#029338`
- **White**: `#FFFFFF`

## Testing

After deployment, test the favicon:
1. Open your site in different browsers
2. Check browser tab for the icon
3. On iOS: Add to Home Screen and check the icon
4. Use [Favicon Checker](https://realfavicongenerator.net/favicon_checker)
