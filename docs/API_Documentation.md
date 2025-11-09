# API Documentation

## Authentication Endpoints
- POST /api/auth/register - User registration
- POST /api/auth/login - User login
- POST /api/auth/verify-email - Email verification

## Admin Endpoints
- GET /api/admin/institutions - Get all institutions
- POST /api/admin/institutions - Create institution
- PUT /api/admin/institutions/:id - Update institution

## Student Endpoints
- GET /api/students/courses - Get available courses
- POST /api/students/applications - Submit application
- POST /api/students/transcripts - Upload transcript

## Institute Endpoints
- GET /api/institutions/courses - Get institution courses
- POST /api/institutions/courses - Create course
- PUT /api/institutions/applications/:id - Update application status

## Company Endpoints
- GET /api/companies/jobs - Get company jobs
- POST /api/companies/jobs - Create job posting
- GET /api/companies/applicants - Get qualified applicants
