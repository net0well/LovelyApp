# Lovely

<div align="center">
  <img href="https://i.ibb.co/r2nS2grs/love-logotype-love-heart-loving-red-and-blue.png" alt="Lovely Logo" width="250">
</div>

Lovely is a modern dating app that helps people connect and meet new matches. It emphasizes authenticity with features like photo verification and real-time chat.

## 🌟 Features

- **User Authentication & Profile Management**: Create detailed profiles with photo verification
- **Smart Matching Algorithm**: Find compatible matches based on preferences and interests
- **Real-time Chat**: Communicate instantly using SignalR integration
- **Location-based Matching**: Connect with people nearby
- **Swipe Feature**: Simple and intuitive user experience
- **Notification System**: Stay updated on matches and messages
- **Privacy Controls**: Control who sees your profile and information

## 🛠️ Tech Stack

### Backend
- **.NET 9**: The latest .NET framework for building robust APIs
- **Entity Framework Core**: ORM for database interactions
- **SQL Server**: Reliable database for storing user data
- **Repository Pattern**: Clean separation of data access logic
- **Unit of Work Pattern**: Managing database transactions and operations
- **SignalR**: For real-time communication
- **RESTful API**: Clean architecture with well-defined endpoints
- **JWT Authentication**: Secure user authentication

### Frontend
- **Angular 17**: Latest version with standalone components
- **CSS**: Custom styling (no preprocessors)
- **Reactive Forms**: For robust form handling and validation
- **TypeScript**: Type-safe JavaScript
- **RxJS**: Reactive programming for handling async operations

## 📋 Prerequisites

- .NET 9 SDK
- SQL Server
- Node.js and npm
- Angular CLI

## ⚙️ Installation

1. Clone the repository
```bash
git clone https://github.com/net0well/LovelyApp.git
cd lovely
```

2. Set up the backend
```bash
cd Lovely.API
dotnet restore
dotnet ef database update
dotnet run
```

3. Set up the frontend
```bash
cd ../Lovely.Client
npm install
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## 🗄️ Database Structure

The application uses SQL Server with Entity Framework Core. Main entities include:
- Users
- Profiles
- Matches
- Messages
- Photos
- Preferences
- Reports

## 📱 API Endpoints

> 🚧 **Under Development** 🚧
> 
> The API structure is currently being designed and implemented. The endpoints below represent the planned architecture and may change during development.

The following endpoints are planned for the initial release:

- Authentication endpoints (register, login, refresh token)
- User profile management
- Matching system
- Messaging and real-time chat
- Photo upload and verification
- User preferences and settings

## 📊 Project Structure

> 🚧 **Under Development** 🚧
> 
> The project structure is evolving as development progresses. The outline below represents the planned architecture.


## 🚀 Deployment

### Backend
- Azure App Service for hosting
- Azure SQL Database for database
- Azure SignalR Service for websockets

### Frontend
- Azure Static Web Apps
- Azure CDN for content delivery

## 🔒 Security Considerations

- All passwords are hashed and salted
- HTTPS enforced for all communications
- JWT with refresh tokens for authentication
- Rate limiting to prevent abuse
- Data encryption for sensitive information
- Regular security audits

## 🧪 Testing

```bash
# Run backend tests
cd Lovely.Tests
dotnet test

# Run frontend tests
cd Lovely.Client
ng test
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

net0well - GitHub: [@net0well](https://github.com/net0well)

Project Link: [https://github.com/net0well/LovelyApp](https://github.com/net0well/LovelyApp)

---

Made with ❤️ for connecting people
