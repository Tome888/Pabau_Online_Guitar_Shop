# Pabau Online Guitar Shop

A modern web application for browsing, searching, and learning about guitars and famous musicians. Built with React, Next.js, TypeScript, Tailwind CSS, and GraphQL.

## Features

- Browse guitars by brand, type, and name
- View detailed specs and musician associations
- Multi-language support (English, Macedonian, Albanian)
- Infinite scroll (works when a brand has enough models for multiple pages; try the Fender brand)
- Fast search and filtering

## Tech Stack

- Next.js (React)
- TypeScript
- Tailwind CSS
- GraphQL (Apollo Client)
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   - open terminal in code editor
   - use git bash
   - git clone https://github.com/Tome888/Pabau_Online_Guitar_Shop.git .
   - use terminal
   - cd online_guitar_shop
   - npm i
   - npm run dev
   ```

### Warning-Please read

I ran into issues with some guitar and musician images not loading properly—mainly due to broken or non-public URLs. To handle this, I created a custom image component that falls back to a placeholder image whenever the original source fails to load.
