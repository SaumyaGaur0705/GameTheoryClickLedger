# GameTheoryClickLedger
All rights reserved to **[@SaumyaGaur0705](https://github.com/SaumyaGaur0705)**, Dr. Udhaya Kumar S, and Amrita Vishwa Vidyapeetham, School of Computing, Chennai.

**Decentralised Fiver** is a blockchain-based platform designed to streamline design feedback processes. It leverages real-time user data and blockchain technology to provide designers with immediate, actionable insights to optimize their designs. The platform allows users to participate in design feedback processes, ensuring transparency, security, and fairness.

---

## Project Overview

This project includes three key components:

1. **Backend**: The core API that manages tasks, user feedback, and interactions.
2. **User Frontend**: The interface for clients to upload and view design tasks, provide feedback, and track progress.
3. **Worker Frontend**: The interface for workers (feedback providers) to interact with tasks, submit feedback, and monitor task status.

---

## Key Features

- **Real-Time Insights**: Provides designers with instant, data-driven feedback using real-time click-through rate (CTR) and user behavior analytics.
- **Blockchain-Driven**: Ensures privacy, transparency, and fairness in the feedback process through the use of blockchain technology.
- **Optimized Decision-Making**: Uses game theory to encourage strategic participation, ensuring high-quality feedback and balanced decision-making.
- **Scalable and Efficient**: Supports a scalable system for rapid design iteration and feedback collection.

---

## Technologies Used

- **Backend**: Node.js, Express, Prisma (for database), JWT for authentication
- **Frontend**: React, Next.js, Tailwind CSS
- **Blockchain**: Solana (for transaction management and incentivization)
- **Database**: PostgreSQL for task, user, and submission management

---

## Installation

### Prerequisites

- Node.js (v14 or higher)
- NPM or Yarn
- PostgreSQL (for local development)

### Steps to Install

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/decentralised-fiver.git
   cd decentralised-fiver
   ```

2. **Install dependencies**:
   - For **backend**:
     ```bash
     cd backend
     npm install
     ```

   - For **user frontend**:
     ```bash
     cd user-frontend
     npm install
     ```

   - For **worker frontend**:
     ```bash
     cd worker-frontend
     npm install
     ```

3. **Set up environment variables**:
   Copy the `.env.example` file to `.env` and update the values with your configuration.

4. **Run the application**:
   - Start the **backend server**:
     ```bash
     cd backend
     npm run dev
     ```

   - Start the **user frontend**:
     ```bash
     cd user-frontend
     npm run dev
     ```

   - Start the **worker frontend**:
     ```bash
     cd worker-frontend
     npm run dev
     ```

---

## Usage

- **Backend**: Once the backend is running, you can interact with the API through the provided endpoints for tasks, feedback submissions, and user management.
  
- **User Frontend**: The user frontend allows clients to submit design tasks, view submissions, and track progress.
  
- **Worker Frontend**: Workers can browse tasks, submit feedback, and see the status of their submitted feedback.

---

## Contributing

We welcome contributions to improve the platform! Here’s how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Submit a pull request

---


---

## Acknowledgements

- **Solana Blockchain** for incentivizing user participation.
- **Prisma** for database management.
- **Tailwind CSS** for utility-first CSS styling.
  
