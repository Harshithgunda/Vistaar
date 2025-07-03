# Vistaar - E-commerce Store
Vistaar is a full-featured e-commerce web application built using React and TypeScript. It includes user authentication with Firebase and secure online payments via Razorpay. The application provides a seamless experience for users to browse products, search by category or name, manage their cart, and complete purchases online.

Live Demo: https://vistaar.vercel.app

# Technologies Used : 

* React with TypeScript
*Firebase Authentication
*Razorpay Payment Gateway
*Tailwind CSS
*React Router
*React Toastify
*Vite
*Deployed using Vercel

# Tech Stach
* Frontend -- React + TypeScript.
* Authentication -- Firebase Auth.
* Payments -- Razorpay.
* Deployment -- Vercel.

# Features.
* User Authentication(Login/Register via Firebase).
* Product catalog with category and name search.
* Shopping cart with quantity management.
* Checkout with address input and payment integration using Razorpay.
* Real-time toast notifications for feedback.
* Clean and responsive user interface using Tailwind CSS.

# Project Structure
*src/
*├── App.tsx (Main application logic)
*├── main.tsx (React DOM entry point)
*├── firebase.ts (Firebase configuration)
*├── AuthContext.tsx (Authentication context provider)
*├── data/products.ts (Product catalog data)
*├── pages/Login.tsx (Login component)
*├── pages/Register.tsx (Register component)
*├── index.css (Global styles)

# Environment Variables:
The following environment variables are required for the project to function properly. These should be configured either in a .env file (for local development) or through your hosting platform (e.g., Vercel):
* VITE_FIREBASE_API_KEY: Your Firebase API key.
* VITE_FIREBASE_AUTH_DOMAIN: Your Firebase authentication domain
* VITE_FIREBASE_PROJECT_ID: Your Firebase project ID
* VITE_FIREBASE_STORAGE_BUCKET: Your Firebase storage bucket
* VITE_FIREBASE_MESSAGING_SENDER_ID: Your Firebase messaging sender ID
* VITE_FIREBASE_APP_ID: Your Firebase app ID
* VITE_RAZORPAY_KEY: Your Razorpay API key

# How to Run Locally : 
1) Clone the repository:
git clone https://github.com/Harshithgunda/Vistaar.git

2) Navigate into the project directory:
cd Vistaar

3) Install dependencies:
npm install

4)Create a .env file and add the required Firebase and Razorpay environment variables

5) Start the development server:
npm run dev

The application will be available at http://localhost:5173.

# Deployment :
This project is deployed on Vercel. To deploy:
* Push the project code to your GitHub repository
* Go to vercel.com and import the repository
* Set the environment variables in the Vercel dashboard
* Click "Deploy"

# Author
*Developed by Harshith Gunda
*GitHub: https://github.com/Harshithgunda
*LinkedIn: https://www.linkedin.com/in/harshithgunda

# License

This project is licensed under the MIT License.

You are free to use, copy, modify, and distribute this software for any purpose, with or without fee, provided that the above copyright notice and this permission notice appear in all copies.

The software is provided "as is", without warranty of any kind.






