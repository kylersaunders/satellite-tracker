# 🛰️ Satellite Tracker - Live 3D View

Real-time visualization of satellites orbiting Earth using Three.js and live TLE data from CelesTrak.

## Features

- **3D Earth model** with realistic texture and atmosphere
- **Live satellite positions** calculated from Two-Line Element (TLE) data
- **Interactive controls**: Click-drag to rotate, scroll to zoom
- **Multiple categories**: ISS, Starlink, GPS, Weather satellites, Communications
- **Click satellites** for detailed info (altitude, velocity, lat/lon, orbital period)
- **Real-time updates** - positions recalculated every frame
- **No API key needed** - uses free CelesTrak data

## Data Sources

- **CelesTrak** - Official NASA orbital element data
- **ISS** - International Space Station
- **Starlink** - SpaceX constellation (limited to 100 for performance)
- **GPS** - Global Positioning System satellites
- **Weather** - NOAA, GOES, and other weather satellites
- **Communications** - Active communication satellites

## How to Run

### Option 1: Local Server (Recommended)

```bash
cd satellite-tracker
python3 -m http.server 8000
```

Then open: http://localhost:8000

### Option 2: Direct File (may have CORS issues)

Just open `index.html` in your browser. Modern browsers may block external resources.

### Option 3: Deploy to Vercel

```bash
cd satellite-tracker
vercel deploy
```

## Controls

- **Drag** - Rotate view around Earth
- **Scroll** - Zoom in/out
- **Click satellite** - Show detailed info
- **Checkboxes** - Toggle satellite categories on/off

## Tech Stack

- **Three.js** - 3D rendering engine
- **Satellite.js** - Orbital mechanics calculations (SGP4 propagation)
- **CelesTrak TLE data** - Real-time satellite orbital elements
- **OrbitControls** - Google Earth-style camera controls

## Customization

Edit the `categories` object to add more satellite groups:

```javascript
const categories = {
    'YourCategory': { 
        url: 'https://celestrak.org/NORAD/elements/gp.php?GROUP=name&FORMAT=tle', 
        color: 0xffffff, 
        visible: true 
    }
};
```

Browse available groups: https://celestrak.org/NORAD/elements/

## Performance Notes

- Starlink limited to 100 satellites (there are 5000+ total)
- Disable categories you don't need for better performance
- Larger satellite count = more CPU for orbital calculations

## Credits

- Earth texture: NASA Blue Marble
- Orbital data: CelesTrak / Space-Track.org
- Satellite.js: Shashwat Kandadai and UCSC
