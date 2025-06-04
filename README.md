# 🧠 Nkwa Web UI Internship Assessment

This is the solution for the **Nkwa Front-end Internship** assessment. The task was to build a responsive, pixel-perfect user interface based on a provided dashboard mockup using **Next.js** and **Tailwind CSS**.

## 📸 Live Demo

👉 [View Live Site](https://nkwa-web-dashbaord-vpk9.vercel.app/)

## 🧰 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Lucide React Icons

## ✅ Features Implemented

- Fully responsive layout across **mobile**, **tablet**, and **desktop**.
- Sidebar with toggle functionality on mobile.
- Topbar with dynamic interactions.
- Staking cards with custom chart data and hover states.
- Active staking asset section.
- Portfolio CTA banner card.
- Mobile sidebar overlay with close interaction.
- Clean component-based architecture.

## 📐 Responsiveness

The UI supports the following breakpoints:

- **Mobile**: `≤ 640px`
- **Tablet**: `641px – 1024px`
- **Desktop**: `> 1024px`

All elements reflow and resize appropriately based on screen size.

## 🚀 Getting Started Locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/Carlglain/Nkwa-web-dashbaord
cd nkwadashboard
npm install
npm run dev
```
The app will be running at http://localhost:3000.

📁 Folder Structure
bash
Copy
Edit
/components
  ├── Header.jsx  
  ├── Sidebar.jsx  
  ├── StakingCard.jsx  
  ├── ActiveStaking.jsx  
  ├── PortfolioCTA.jsx  
  ├── TopAssetHeader.jsx  
/pages    
  ├── index.jsx  
/public/assets  
  └── ETH.png, BNB.png, Matic.png  
📝 Notes  
The dashboard was implemented strictly based on the single mockup provided.

Styling and layout were built to reflect pixel-perfect accuracy using Tailwind CSS.

Sidebar toggle is implemented for mobile devices with appropriate overlay handling.
![image](https://github.com/user-attachments/assets/c1fa1d8b-7283-4538-9d83-77a8d02d2b79)


