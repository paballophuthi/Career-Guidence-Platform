// Data seeding script
const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

async function seedData() {
  // Seed initial data here
  console.log('Seeding initial data...')
}

seedData().catch(console.error)
