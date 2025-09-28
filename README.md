# MothEaten Prints

A Vue.js application that displays artwork in a gallery format. When users click on an artwork, it opens up to show more details about the piece.

## Features
- Interactive artwork gallery
- Modal popup with detailed artwork information
- Data loaded from JSON file
- Responsive design with SCSS styling

## Project Setup

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Customization

### Artwork Data
To modify or add artwork to the gallery, edit the JSON file at `public/data/artworks.json`.

### Images
Place artwork images in the `public/images/` directory and reference them in the JSON file.

### Styling
The main styles are defined in SCSS at `src/assets/main.scss`. Component-specific styles are included within each Vue component.

## Technologies Used
- Vue.js 3
- Vite
- SCSS