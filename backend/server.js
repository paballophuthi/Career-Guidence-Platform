const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', require('./src/routes/authRoutes'))
app.use('/api/admin', require('./src/routes/adminRoutes'))
app.use('/api/institutions', require('./src/routes/institutionRoutes'))
app.use('/api/students', require('./src/routes/studentRoutes'))
app.use('/api/companies', require('./src/routes/companyRoutes'))

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Career Guidance Platform API is running!' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(Server running on port )
})
