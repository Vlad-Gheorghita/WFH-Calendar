# WFH Calendar 📅

A minimalist, modern calendar app for tracking your work-from-home days. Built with Angular & Firebase, it helps you manage your remote schedule, view remaining WFH days, and update your account securely.

---

## ✨ Features

• 🔒 Secure authentication (Firebase Auth)  
• 🟢 Google sign-in  
• 📅 Mark/unmark WFH days on a monthly calendar  
• 🔢 View remaining WFH days  
• 👤 Account management (change username, email, password)  
• ✉️ Password reset via email  
• 📱 Responsive UI (Angular Material, Flex Layout)  

---

## 🛠️ Tech Stack

• 🅰️ Angular 14+  
• 🔥 Firebase (Auth, Firestore, Hosting)  
• 🟦 TypeScript  
• 🎨 Angular Material  
• 📐 Flex Layout  
• ⭐ FontAwesome  
• 💅 SCSS/CSS, HTML  

---

## 📁 Project Structure

```
src/
  app/
    auth/         # Authentication (login, register, password reset)
    core/         # Core layout, navigation
    apps/
      calendar/   # Calendar feature
      settings/   # Account settings
    libs/
      models/     # Data models (User, WFH)
      services/   # Business logic/services
      guards/     # Route guards
    shared/       # Shared modules (Firebase, etc)
  assets/         # Images, icons
  environments/   # Environment configs
```

---

## 🚦 Getting Started

### ⚙️ Prerequisites
• Node.js >= 16.x  
• npm >= 8.x  
• Angular CLI (`npm install -g @angular/cli`)  

### 📝 Step-by-Step Installation & Setup Guide

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Vlad-Gheorghita/WFH-Calendar.git
cd WFH-Calendar
```

#### 2️⃣ Install Dependencies
```bash
npm install
```

#### 3️⃣ Configure Firebase
• Go to the [Firebase Console](https://console.firebase.google.com/)  
• Create a new project or select your existing project  
• Add your Firebase config to `src/environments/environment.ts`  
• Enable Authentication (Email/Password, Google)  
• Set up Firestore database  

#### 4️⃣ Run the App Locally
```bash
ng serve
# Visit http://localhost:4200
```

---

## 🖼️ Screenshots

**Login & Register**
<p align="center">
  <img src="https://github.com/Vlad-Gheorghita/Photos/blob/master/WFH-Calendar/login.png" width="38%">
  <img src="https://github.com/Vlad-Gheorghita/Photos/blob/master/WFH-Calendar/register.png" width="36%">
</p>

**Email Confirmation**
<p align="center">
  <img src="https://github.com/Vlad-Gheorghita/Photos/blob/master/WFH-Calendar/email%20verification.png" width="50%">
</p>

**Password Reset**
<p align="center">
  <img src="https://github.com/Vlad-Gheorghita/Photos/blob/master/WFH-Calendar/forgot%20password.png" width="50%">
</p>

**Calendar**
<p align="center">
  <img src="https://github.com/Vlad-Gheorghita/Photos/blob/master/WFH-Calendar/main%20page.png" width="70%">
</p>

**Settings**
<p align="center">
  <img src="https://github.com/Vlad-Gheorghita/Photos/blob/master/WFH-Calendar/settings%20page.png" width="70%">
</p>

---

## 📲 Usage

• Register or log in with email/password or Google  
• Mark/unmark your WFH days on the calendar  
• View remaining WFH days for the month  
• Manage your account in Settings  

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

MIT

---

## 🙏 Credits

• 👤 [Vlad Gheorghita](https://github.com/Vlad-Gheorghita) (Author)  
• 🅰️ [Angular](https://angular.dev/)  
• 🔥 [Firebase](https://firebase.google.com/)  
• 🎨 [Angular Material](https://material.angular.io/)  
• ⭐ [FontAwesome](https://fontawesome.com/)  

---

For questions or feedback, please open an issue or contact [Vlad Gheorghita](https://github.com/Vlad-Gheorghita).
