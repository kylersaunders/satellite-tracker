#!/bin/bash

echo "🛰️ Deploying Satellite Tracker to Vercel..."
echo ""

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm i -g vercel
fi

cd "$(dirname "$0")"

# Deploy with existing token
vercel deploy --prod --token="mKG4simRr1XJoPr0pr5SzEXl" --scope=kylersaunders 2>&1

echo ""
echo "If authentication failed, run:"
echo "  vercel login"
echo "  vercel deploy --prod"
