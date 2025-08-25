# CompanyFinder - MERN Stack Application

A full-stack web application for managing and searching company data, built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project was developed as a technical assessment for Frontlines Media.

## 🚀 Features

### Backend (Node.js + Express + MongoDB)
- **RESTful API** for complete CRUD operations on company data
- **Advanced Filtering** with multiple search criteria
- **MongoDB Integration** with Mongoose ODM
- **CORS Enabled** for cross-origin requests
- **Environment Configuration** with dotenv

### Frontend (Next.js + React + TypeScript)
- **Modern UI** with Tailwind CSS and Radix UI components
- **Responsive Design** that works on all devices
- **Real-time Filtering** with searchable dropdowns
- **Company Cards** displaying comprehensive information
- **Add Company Form** with validation
- **TypeScript** for type safety

### Company Data Model
- **Name** (required)
- **Industry** (required)
- **Location** (required)
- **Size** (number of employees)
- **Founded Year**
- **Domain/Website**
- **Rating** (0-5 scale)
- **Hiring Status** (boolean)
- **Timestamps** (created/updated)

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - Object Data Modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Frontend
- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Lucide React** - Icon library
- **Axios** - HTTP client

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd CompanyFinder
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install API dependencies
cd apps/api
npm install

# Install Web dependencies
cd ../web
npm install
```

### 3. Environment Setup

#### Backend (.env file in apps/api/)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/companyfinder
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/companyfinder
```

#### Frontend (.env.local file in apps/web/)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 4. Start the Application

#### Development Mode
```bash
# Terminal 1 - Start Backend
cd apps/api
npm run dev

# Terminal 2 - Start Frontend
cd apps/web
npm run dev
```

#### Production Mode
```bash
# Build frontend
cd apps/web
npm run build
npm start

# Start backend
cd apps/api
npm start
```

## 🌐 API Documentation

### Base URL
```
http://localhost:5000/api/companies
```

### Endpoints

#### 1. Get All Companies
```http
GET /api/companies
```

**Query Parameters (Filters):**
- `industry` - Filter by industry
- `location` - Filter by location
- `size` - Filter by minimum company size
- `domain` - Filter by domain
- `isHiring` - Filter by hiring status (true/false)
- `minRating` - Filter by minimum rating (0-5)

**Example:**
```http
GET /api/companies?industry=Technology&location=San Francisco&minRating=4
```

#### 2. Get Company by ID
```http
GET /api/companies/:id
```

#### 3. Create New Company
```http
POST /api/companies/add
Content-Type: application/json

{
  "name": "Tech Corp",
  "industry": "Technology",
  "location": "San Francisco",
  "size": 500,
  "foundedYear": 2020,
  "domain": "techcorp.com",
  "rating": 4.5,
  "isHiring": true
}
```

#### 4. Update Company
```http
PUT /api/companies/:id
Content-Type: application/json

{
  "name": "Updated Tech Corp",
  "rating": 4.8
}
```

#### 5. Delete Company
```http
DELETE /api/companies/:id
```

## 🎨 Frontend Features

### Main Dashboard (`/`)
- **Company Cards** displaying all company information
- **Advanced Filtering** with multiple criteria
- **Searchable Dropdowns** for industry, location, and domain
- **Real-time Search** by company name
- **Responsive Grid Layout**

### Add Company Page (`/addcompany`)
- **Form Validation** for required fields
- **Input Types** appropriate for each field
- **Success/Error Messages**
- **Auto-reset** after successful submission

### Filter Options
- **Company Name** - Text search
- **Industry** - Dropdown with search
- **Location** - Dropdown with search
- **Company Size** - Minimum size filter
- **Domain** - Dropdown with search
- **Rating** - Minimum rating filter (0-5)
- **Hiring Status** - Yes/No filter

## 📁 Project Structure

```
CompanyFinder/
├── apps/
│   ├── api/                    # Backend API
│   │   ├── src/
│   │   │   ├── configs/        # Database configuration
│   │   │   ├── controllers/    # Route controllers
│   │   │   ├── models/         # Mongoose models
│   │   │   ├── routes/         # Express routes
│   │   │   └── index.js        # Server entry point
│   │   └── package.json
│   └── web/                    # Frontend Application
│       ├── app/                # Next.js app directory
│       │   ├── addcompany/     # Add company page
│       │   └── page.tsx        # Main dashboard
│       ├── components/         # Reusable components
│       │   └── ui/            # UI components
│       └── package.json
├── package.json               # Root package.json
└── README.md
```

## 🔧 Development

### Adding New Features
1. **Backend**: Add new routes in `apps/api/src/routes/`
2. **Frontend**: Create new pages in `apps/web/app/`
3. **Components**: Add reusable components in `apps/web/components/`

### Database Schema
The company schema includes:
- Required fields: name, industry, location
- Optional fields: size, foundedYear, domain, rating, isHiring
- Automatic timestamps: createdAt, updatedAt

### Styling
- Uses Tailwind CSS for styling
- Radix UI components for accessibility
- Responsive design with mobile-first approach

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or local MongoDB
2. Configure environment variables
3. Deploy to platforms like Heroku, Railway, or Vercel

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy to Vercel, Netlify, or similar platforms
3. Update API URL in environment variables

## 📝 Testing

### API Testing
Use tools like Postman or curl to test endpoints:

```bash
# Test getting all companies
curl http://localhost:5000/api/companies

# Test adding a company
curl -X POST http://localhost:5000/api/companies/add \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Corp","industry":"Technology","location":"Test City"}'
```

### Frontend Testing
- Open browser developer tools
- Test responsive design
- Verify all filters work correctly
- Test form validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is developed as a technical assessment for Frontlines Media.

## 👨‍💻 Developer

This project was developed as a technical assessment demonstrating MERN stack proficiency, including:
- RESTful API development
- Database design and management
- Modern React/Next.js frontend
- TypeScript implementation
- Responsive UI/UX design
- Clean code architecture

---

**Note**: This application is designed to be a complete, production-ready solution for managing company data with advanced filtering capabilities and a modern, responsive user interface.
