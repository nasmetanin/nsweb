# nsweb

[![Project Build Success](https://github.com/nasmetanin/nsweb/actions/workflows/project-build-success.yaml/badge.svg)](https://github.com/nasmetanin/nsweb/actions/workflows/project-build-success.yaml)

## Development Commands

### Essential Commands

- **Development server**: `npm run dev` - Starts Next.js development server on all network interfaces (0.0.0.0)
- **Build**: `npm run build` - Creates optimized production build
- **Start production**: `npm start` - Starts the production server
- **Lint**: `npm run lint` - Runs ESLint for code quality checks
- **Test**: `npm run test` - Currently a placeholder that exits successfully

### Node.js Version

This project uses Node.js 18.18.0 (as specified in GitHub Actions). Ensure you're using this version for consistency.

## Architecture Overview

### Project Structure

This is a **Next.js 14 personal portfolio website** built with TypeScript and modern React patterns:

```
src/
├── app/                    # Next.js App Router structure
│   ├── layout.tsx         # Root layout with font, analytics, header/footer
│   ├── page.tsx           # Home page (intro + projects list)
│   └── projects/          # Individual project pages
│       ├── nsweb/         # Self-referential portfolio page
│       ├── druzi/         # Radio station project
│       ├── lifefuel/      # Water subscription service
│       ├── ventus/        # Web development studio
│       └── 35fit/         # Gym service project
├── components/            # Reusable React components
├── json/                  # Static data (projects.json)
└── styles/               # CSS modules for styling
```

### Key Components Architecture

**Layout Structure**:

- `layout.tsx`: Root layout with Geologica font, Vercel analytics, and Clarity tracking
- `header.tsx`: Navigation with logo, theme switcher, and GitHub link
- `footer.tsx`: Site footer

**Core Components**:

- `projects.tsx`: Paginated project grid (4 projects per page) with Framer Motion animations
- `project.tsx`: Individual project tile component
- `about.tsx`: Personal information section with social links and CV download
- `theme-switch.tsx`: Dark/light theme toggle with localStorage persistence

**Project Pages**:

- Each project has its own route under `/projects/[slug]`
- Uses structured data from `projects.json` for consistency
- Includes tech stack visualization with `stack.tsx` component
- Project-specific metadata for SEO and social sharing

### Styling Architecture

**CSS Variables System**:

- Uses CSS custom properties for theming in `globals.css`
- Supports dark/light themes via `[data-theme]` attribute
- Consistent design tokens for colors, spacing, and layout

**Responsive Design**:

- Mobile-first approach with CSS media queries
- Responsive images using Next.js Image component
- Flexible grid layouts for different screen sizes

### Data Management

**Static Data**:

- Project information stored in `src/json/projects.json`
- Each project includes: title, description, image, year, URL, and tags
- Images stored in `public/projects/` with organized subdirectories

**State Management**:

- Local state with React hooks (useState, useEffect)
- Theme persistence via localStorage
- Pagination state for projects grid

## Development Workflow

### Adding New Projects

1. Add project data to `src/json/projects.json`
2. Create project images in `public/projects/[project-name]/`
3. Create new page at `src/app/projects/[project-name]/page.tsx`
4. Follow the existing pattern for metadata and component structure

### Styling Guidelines

- Use CSS modules for component-specific styles
- Follow the established CSS variable naming convention
- Maintain theme compatibility (dark/light mode)
- Use responsive design patterns already established

### Component Development

- Components are primarily functional with hooks
- Use TypeScript for all new components
- Follow the existing prop interface patterns
- Implement proper accessibility features (focus states, ARIA labels)

## CI/CD

The project uses GitHub Actions for automated builds:

- Triggers on push to main branch
- Runs on Ubuntu with Node.js 18.18.0
- Executes: checkout → install → build → test
- Configuration in `.github/workflows/project-build-success.yaml`

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules with CSS custom properties
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber (@react-three/fiber, @react-three/drei)
- **Analytics**: Vercel Analytics & Speed Insights
- **Deployment**: Vercel (automatic deployments)
- **Image Optimization**: Next.js Image component with Sharp

## Deployment

The site is hosted on Vercel with automatic deployments from the main branch. The domain is configured as `nsweb.tech` with proper SEO metadata and social sharing optimization.
