# meetUs - Event Management Platform

A modern React-based event management platform that allows users to create, browse, and manage events. Built with React, Vite, Firebase, and styled with Tailwind CSS.

## 🚀 Features

### Authentication

- Email and password registration/login
- Google OAuth integration
- Secure user session management with Redux
- Firebase Authentication integration

### Event Management

- **Create Events**: Users can create detailed events with multiple configuration options
- **Browse Events**: View all available events with advanced filtering
- **Event Types**: Support for conferences, workshops, seminars, courses, networking, meetups, hackathons, webinars, and more
- **Event Modalities**: Presential, virtual, and hybrid events
- **Pricing**: Free and paid events
- **Capacity Management**: Set maximum attendee limits

### Event Features

- Detailed event information (name, description, category)
- Date and time scheduling
- Location management for presential events
- Online links for virtual/hybrid events
- Organizer tracking
- Real-time event filtering and search

### User Interface

- Responsive design with Tailwind CSS
- Modern and intuitive user experience
- Loading states and error handling
- Clean navigation with React Router

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **State Management**: Redux Toolkit, React Redux
- **Routing**: React Router DOM
- **Authentication**: Firebase Auth
- **Database**: Firestore (Firebase)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd proyectoAlternativo
```

2. Install dependencies:

```bash
npm install
```

3. Set up Firebase configuration:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password and Google providers)
   - Enable Firestore Database
   - Create a `.env` file in the root directory with your Firebase config:

```env
VITE_FIREBASE_apiKey=your_api_key
VITE_FIREBASE_authDomain=your_auth_domain
VITE_FIREBASE_projectId=your_project_id
VITE_FIREBASE_storageBucket=your_storage_bucket
VITE_FIREBASE_messagingSenderId=your_messaging_sender_id
VITE_FIREBASE_appId=your_app_id
```

4. Start the development server:

```bash
npm run dev
```

## 🏗️ Project Structure

```text
src/
├── assets/                 # Static assets (icons, images)
├── components/            # React components
│   ├── Auth.jsx          # Authentication component
│   ├── ListarEventos.jsx # Event listing with filters
│   ├── NavBar.jsx        # Navigation bar
│   ├── NuevoEvento.jsx   # Event creation form
│   └── Routeer.jsx       # Application routing
├── firebase/              # Firebase configuration
│   ├── config.js         # Firebase setup
│   └── handleFirebaseError.js # Error handling
├── hooks/                 # Custom React hooks
│   └── useAuth.js        # Authentication hook
├── store/                 # Redux store configuration
│   ├── authSlice.js      # Authentication state management
│   └── store.js          # Store configuration
├── App.jsx               # Main application component
├── main.jsx              # Application entry point
└── index.css             # Global styles
```

## 🚦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🔧 Key Components

### Authentication (`Auth.jsx`)

- Handles user registration and login
- Integrates with Firebase Auth
- Supports email/password and Google OAuth
- Manages authentication state with Redux

### Event Listing (`ListarEventos.jsx`)

- Displays all events in a responsive grid
- Advanced filtering by type, modality, and price
- Real-time data fetching from Firestore
- Event cards with detailed information

### Event Creation (`NuevoEvento.jsx`)

- Comprehensive form for creating new events
- Validation for required fields
- Support for different event types and modalities
- Integration with Firestore for data persistence

### Navigation (`NavBar.jsx`)

- Clean navigation between different sections
- Responsive design
- Brand identity display

## 🔒 Security Features

- Firebase security rules implementation
- User authentication required for event creation
- Error handling for authentication failures
- Secure environment variable management

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:

- Desktop computers
- Tablets
- Mobile devices

## 🚀 Deployment

To deploy the application:

1. Build the project:

```bash
npm run build
```

2. Deploy the `dist` folder to your preferred hosting service (Vercel, Netlify, Firebase Hosting, etc.)

3. Ensure your Firebase configuration is properly set up for the production environment.

## 📄 License

This project is part of a college development project.
