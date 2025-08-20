# IPS Viewer TypeScript App - Local Deployment Guide

This guide provides step-by-step instructions for deploying the IPS Viewer TypeScript application locally, including the enhanced Kotlin-based rendering architecture.

## Prerequisites

Before starting, ensure you have the following installed on your system:

1. **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
2. **npm** (comes with Node.js) or **yarn**
3. **Git** - [Download here](https://git-scm.com/)
4. **Java JDK 11+** (for building the Kotlin library) - [Download here](https://adoptium.net/)

You can verify your installations by running:
```bash
node --version
npm --version
git --version
java --version
```

## Quick Start (5 Minutes)

For the fastest setup, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/litlfred/IPSviewer.git
   cd IPSviewer
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment**:
   ```bash
   cp default.env .env
   ```

4. **Build the Kotlin library** (required for enhanced rendering):
   ```bash
   cd kotlin-library
   ./gradlew build
   cd ..
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

The application will be available at: **http://localhost:3000**

## Detailed Setup Instructions

### Step 1: Clone and Navigate to Repository

```bash
git clone https://github.com/litlfred/IPSviewer.git
cd IPSviewer
```

### Step 2: Install Node.js Dependencies

```bash
npm install
```

This will install all required TypeScript, Svelte, and Vite dependencies as defined in `package.json`.

### Step 3: Configure Environment Variables

Copy the default environment file and customize if needed:

```bash
cp default.env .env
```

The default configuration includes:
- Demo mode enabled (`VITE_SHOW_VIEWER_DEMO=1`)
- Debug mode disabled (comment out `DEBUG=1` for production)

**Optional**: For development, you can also copy development-specific settings:
```bash
cp default.env.development .env.development
```

### Step 4: Build the Kotlin Multiplatform Library

The enhanced rendering architecture requires building the Kotlin library first:

```bash
cd kotlin-library
./gradlew build
cd ..
```

This process will:
- Download Gradle (if not installed)
- Compile Kotlin multiplatform code
- Generate JavaScript output for browser usage
- Run tests to ensure everything works
- Create JAR files for Android/JVM usage

**Note**: The first build may take 2-3 minutes as Gradle downloads dependencies.

### Step 5: Development vs Production Deployment

#### For Development:

Start the Vite development server:
```bash
npm run dev
```

Features:
- Hot module reloading
- Source maps for debugging
- Runs on http://localhost:3000 (configurable via `DEV_SERVER_PORT` in `.env.development`)
- Auto-opens browser (add `-- --open` flag)

#### For Production:

Build the production version:
```bash
npm run build
```

Then serve the built files:
```bash
npm run preview
# or
npm start
```

The production build:
- Creates optimized, minified bundles in `.svelte-kit/output/`
- Generates static files in `build/` directory
- Removes development-only code
- Optimizes for performance

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reloading |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm start` | Serve production build (requires prior build) |
| `npm run check` | Run TypeScript and Svelte checks |
| `npm run lint` | Check code formatting |
| `npm run format` | Auto-format code |
| `npm test` | Run tests |

## Architecture Overview

The application now uses a **Kotlin-based rendering architecture** that provides:

1. **Enhanced IPS Processing**: Unified FHIR resource extraction and processing
2. **Cross-Platform Consistency**: Same rendering logic for TypeScript and Android
3. **Improved Data Handling**: Better extraction of Patient, AllergyIntolerance, Conditions, Medications, etc.
4. **Reduced Maintenance**: Single source of truth for rendering business logic

### Key Components:

- **Frontend**: Svelte/TypeScript SPA built with Vite
- **Rendering Engine**: Kotlin multiplatform library compiled to JavaScript
- **Static Assets**: Images, samples, and CSS in `static/` directory
- **Express Server**: Node.js server for production hosting (optional)

## Directory Structure

```
IPSviewer/
├── src/                    # Svelte/TypeScript source code
├── static/                 # Static assets (images, samples)
├── kotlin-library/         # Kotlin multiplatform rendering engine
│   ├── src/               # Kotlin source code
│   └── build/             # Compiled outputs
├── build/                 # Production build output
├── .svelte-kit/           # SvelteKit generated files
├── package.json           # Node.js dependencies and scripts
├── vite.config.ts         # Vite configuration
├── svelte.config.js       # Svelte configuration
├── default.env            # Default environment variables
└── README.md              # Project documentation
```

## Testing Your Deployment

1. **Verify the app loads**:
   - Navigate to http://localhost:3000
   - You should see the IPS Viewer interface

2. **Test with sample data**:
   - Click on "Demo" tab (if `VITE_SHOW_VIEWER_DEMO=1`)
   - Upload a sample IPS file from `static/samples/`
   - Verify the content renders correctly

3. **Check enhanced rendering**:
   - Look for improved display of Patient information
   - Verify AllergyIntolerance, Conditions, and Medications sections
   - Check that the Kotlin-based processing warnings appear in browser console

## Troubleshooting

### Common Issues:

1. **"npm install fails"**:
   - Ensure Node.js v16+ is installed
   - Try deleting `node_modules/` and `package-lock.json`, then run `npm install` again

2. **"Kotlin build fails"**:
   - Ensure Java JDK 11+ is installed
   - Check that `JAVA_HOME` environment variable is set
   - Try `cd kotlin-library && ./gradlew clean build`

3. **"Port 3000 already in use"**:
   - Kill the process using the port: `lsof -ti:3000 | xargs kill -9`
   - Or change the port in `.env.development`: `DEV_SERVER_PORT=3001`

4. **"Build size warnings"**:
   - This is normal for the current setup with embedded Kotlin library
   - Consider code splitting for production optimization

### Getting Help:

- Check the browser console for JavaScript errors
- Review network requests in browser dev tools
- Examine Kotlin library logs during build process
- Verify all environment variables are set correctly

## Production Hosting

For production deployment:

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Serve static files** using:
   - **Express server**: `node app.js` (HTTPS support available)
   - **Static hosting**: Deploy `build/` directory to CDN/web server
   - **Docker**: Create container with Node.js and serve the build

3. **Environment considerations**:
   - Set `DEBUG=` (empty) for production
   - Configure HTTPS certificates in `certs/` folder
   - Update any API endpoints or external service URLs

## Next Steps

- **Mobile Support**: The Kotlin library also supports Android development
- **Customization**: Modify Kotlin processors in `kotlin-library/src/` for custom FHIR resource handling
- **Integration**: Use the Kotlin library API for embedding in other applications
- **Performance**: Consider implementing code splitting and lazy loading for large deployments

For more detailed technical information, see:
- `KOTLIN_LIBRARY_USAGE.md` - Kotlin library integration guide
- `ENHANCED_RENDERING_ARCHITECTURE.md` - Architecture documentation