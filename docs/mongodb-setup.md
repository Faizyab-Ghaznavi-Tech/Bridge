# MongoDB Setup and Connection Guide

## 🔍 Quick Diagnosis

First, let's check if MongoDB is running:

### Windows
```bash
# Check if MongoDB service is running
net start | findstr MongoDB

# Or check services
services.msc
# Look for "MongoDB Server" in the services list
```

### macOS
```bash
# Check if MongoDB is running
brew services list | grep mongodb

# Or check processes
ps aux | grep mongod
```

### Linux (Ubuntu/Debian)
```bash
# Check MongoDB service status
sudo systemctl status mongod

# Or check if process is running
ps aux | grep mongod
```

## 📦 Installing MongoDB

### Option 1: MongoDB Community Server (Recommended for Development)

#### Windows
1. Download MongoDB Community Server from: https://www.mongodb.com/try/download/community
2. Run the installer (.msi file)
3. Choose "Complete" installation
4. Install as a Windows Service (recommended)
5. Install MongoDB Compass (GUI tool) - optional but helpful

#### macOS (using Homebrew)
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Add MongoDB tap
brew tap mongodb/brew

# Install MongoDB Community Edition
brew install mongodb-community

# Start MongoDB service
brew services start mongodb/brew/mongodb-community
```

#### Linux (Ubuntu/Debian)
```bash
# Import MongoDB public GPG key
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

# Create list file for MongoDB
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Update package database
sudo apt-get update

# Install MongoDB
sudo apt-get install -y mongodb-org

# Start MongoDB service
sudo systemctl start mongod
sudo systemctl enable mongod
```

### Option 2: MongoDB Atlas (Cloud - Easier Setup)

If you prefer a cloud solution:
1. Go to https://www.mongodb.com/atlas
2. Create a free account
3. Create a free cluster
4. Get your connection string
5. Update your `.env` file with the Atlas connection string

## 🚀 Starting MongoDB

### Windows
```bash
# If installed as service, start it
net start MongoDB

# Or manually start (if not installed as service)
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath "C:\data\db"
```

### macOS
```bash
# Start as service
brew services start mongodb/brew/mongodb-community

# Or start manually
mongod --config /usr/local/etc/mongod.conf
```

### Linux
```bash
# Start service
sudo systemctl start mongod

# Check status
sudo systemctl status mongod
```

## ✅ Verifying MongoDB is Running

### Test Connection
```bash
# Connect to MongoDB shell
mongosh

# Or if you have older version
mongo

# You should see something like:
# Current Mongosh Log ID: ...
# Connecting to: mongodb://127.0.0.1:27017/?directConnection=true
# Using MongoDB: 7.0.x
```

### Check if Port 27017 is Open
```bash
# Windows
netstat -an | findstr 27017

# macOS/Linux
netstat -an | grep 27017
# Should show: tcp4  0  0  127.0.0.1.27017  *.*  LISTEN
```

## 🔧 Common Connection Issues & Fixes

### Issue 1: MongoDB Not Running
**Solution:** Start MongoDB service (see commands above)

### Issue 2: Port 27017 in Use
```bash
# Find what's using port 27017
# Windows
netstat -ano | findstr 27017

# macOS/Linux
lsof -i :27017

# Kill the process if needed (replace PID)
kill -9 <PID>
```

### Issue 3: Permission Issues (Linux/macOS)
```bash
# Fix MongoDB data directory permissions
sudo chown -R mongodb:mongodb /var/lib/mongodb
sudo chown mongodb:mongodb /tmp/mongodb-27017.sock
```

### Issue 4: Firewall Blocking Connection
```bash
# Windows - Allow MongoDB through firewall
# Go to Windows Defender Firewall > Allow an app
# Add MongoDB or allow port 27017

# Linux - UFW
sudo ufw allow 27017

# macOS - Usually not an issue for localhost
```

## 🛠️ Alternative: Using Docker (Quick Setup)

If you prefer Docker:

```bash
# Pull and run MongoDB container
docker run --name mongodb -d -p 27017:27017 mongo:latest

# Check if running
docker ps

# Connect to MongoDB in container
docker exec -it mongodb mongosh
```

## 📝 Update Your Environment

Create a `.env` file in your project root:

```env
# For local MongoDB
MONGODB_URI=mongodb://localhost:27017/bridgeb

# For MongoDB Atlas (if using cloud)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bridgeb

JWT_SECRET=your-super-secret-jwt-key-here
PORT=3001
NODE_ENV=development
```

## 🧪 Test Your Connection

Create a test script to verify connection:

```javascript
// test-connection.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const testConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bridgeb');
    console.log('✅ MongoDB connected successfully!');
    
    // Test basic operation
    const testCollection = mongoose.connection.db.collection('test');
    await testCollection.insertOne({ test: 'Hello MongoDB!' });
    console.log('✅ Test document inserted successfully!');
    
    await mongoose.disconnect();
    console.log('✅ MongoDB disconnected successfully!');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
  }
};

testConnection();
```

Run the test:
```bash
node test-connection.js
```

## 🎯 Recommended Setup for Development

1. **Install MongoDB Community Server locally** (most reliable for development)
2. **Start it as a service** (auto-starts with your computer)
3. **Install MongoDB Compass** (GUI for viewing/managing data)
4. **Use the local connection string** in your `.env` file

This gives you full control and doesn't require internet connectivity for development.