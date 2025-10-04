#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Starting portfolio deployment..."

# Check if git is clean
if [[ -n $(git status -s) ]]; then
    echo "⚠️  You have uncommitted changes. Please commit them first."
    exit 1
fi

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi

# Test the build locally
echo "🧪 Testing production build..."
npm start &
SERVER_PID=$!

# Wait a moment for server to start
sleep 3

# Check if server is running
if curl -f http://localhost:5000 > /dev/null 2>&1; then
    echo "✅ Local test passed!"
    kill $SERVER_PID
else
    echo "❌ Local test failed. Server not responding."
    kill $SERVER_PID
    exit 1
fi

echo "🎉 Ready for deployment!"
echo "Next steps:"
echo "1. Push to GitHub: git push origin main"
echo "2. Deploy to your chosen platform (Railway, Render, etc.)"
