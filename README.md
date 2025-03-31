# BankDash

## Overview
**BankDash** is a modern, responsive, and intuitive banking dashboard built with **React**, **Vite**, and **Tailwind CSS**. It provides users with an interactive and seamless experience for managing accounts, transactions, investments, credit cards, and other financial services.

## Features
- **User-Friendly Dashboard** – A clean and minimal interface to manage financial data.
- **Responsive Design** – Optimized for both desktop and mobile devices.
- **Modular Components** – Well-structured components for better maintainability.
- **Multi-Page Navigation** – Organized financial sections such as Transactions, Investments, Loans, and more.
- **Fast & Scalable** – Built with Vite for enhanced performance and development speed.

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Routing:** React Router
- **Icons & UI Enhancements:** React Icons

## Project Structure
```
BankDash/
│── public/                  # Static assets
│── src/
│   ├── assets/              # Images, icons, and other assets
│   ├── components/          # Reusable UI components
│   │   ├── cards/           # Credit card-related components
│   │   ├── general/         # General reusable components
│   │   ├── overview/        # Dashboard overview components
│   │   ├── setting/         # User settings components
│   │   ├── credit/          # Credit-related components
│   │   ├── loans/           # Loan-related components
│   │   ├── transaction/     # Transaction-related components
│   ├── pages/               # Main application pages
│   │   ├── Home.jsx         # Homepage
│   │   ├── Overview.jsx     # Dashboard overview
│   │   ├── Transactions.jsx # Transactions page
│   │   ├── Investments.jsx  # Investments page
│   │   ├── Loans.jsx        # Loans page
│   │   ├── CreditCards.jsx  # Credit cards page
│   │   ├── Privileges.jsx   # Special privileges page
│   │   ├── Services.jsx     # Financial services page
│   │   ├── Setting.jsx      # User settings page
│   │   ├── LandingPage.jsx  # Initial landing page
│   ├── App.jsx              # Main application wrapper
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│── tailwind.config.js       # Tailwind configuration
│── vite.config.js           # Vite configuration
│── package.json             # Dependencies and scripts
│── README.md                # Project documentation
```

## Installation & Setup
### Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed.

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/InternPulse-Frontend-March-2025/bankdash.git
   cd bankdash
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the app in your browser at:
   ```
   http://localhost:5173
   ```

## Scripts
| Command            | Description                                    |
|--------------------|----------------------------------------------|
| `npm run dev`     | Start the development server                 |
| `npm run build`   | Build the project for production             |
| `npm run preview` | Preview the production build                 |
| `npm run lint`    | Lint the code using ESLint                    |

## Contribution Guidelines
1. Fork the repository and create a feature branch.
2. Ensure code follows project conventions and is well-documented.
3. Create a pull request with a detailed description of changes.

## License
This project is licensed under the **MIT License**.

## Contact
For inquiries, please contact the development team at **ofoma.chudi@gmail.com**.
