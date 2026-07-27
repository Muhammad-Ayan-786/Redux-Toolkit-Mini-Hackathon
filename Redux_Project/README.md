# CareerTrack — Job Application Tracker

A Redux Toolkit-powered web app to help job seekers track and organize their job applications. I built this as part of a Mini Hackathon challenge to explore Redux Toolkit through self-learning.

## About

CareerTrack lets you log every job you apply to, track its status through the hiring pipeline (Applied → Interview → Offer / Rejected), and keep notes and job posting links all in one place, instead of losing track across spreadsheets, emails, and browser tabs.

This project was built to explore **Redux Toolkit** from the ground up: store setup, slices, reducers, actions, and the `useSelector`/`useDispatch` hooks, alongside authentication and form handling with React Hook Form.

## Features

- **Authentication** — Register and log in with form validation (React Hook Form)
- **Protected Routing** — Dashboard is only accessible once logged in
- **Add / Edit / Delete Applications** — Full CRUD on job applications
- **Grid & List Views** — Toggle between a card grid and a compact list
- **Search** — Filter applications by company, role, or status
- **Status Dashboard** — Quick summary counts (Applied / Interview / Offer / Rejected)
- **Detail View** — Click into any application to see full notes, job link, and dates
- **Persistent Data** — Applications and auth state saved to `localStorage`

## Tech Stack

- **React** — UI library
- **Redux Toolkit** — State management (store, slices, reducers, actions)
- **React Router** — Routing, including protected/public route guards
- **React Hook Form** — Form handling and validation
- **Tailwind CSS** — Styling
- **Lucide React** — Icons
- **React Hot Toast** — Notifications

## Project Structure

```
src/
 ├── components/        # Reusable UI: cards, form, navbar, detail view
 ├── hooks/             # Custom hooks (useAuth, useApplicationHandlers)
 ├── layouts/           # AuthLayout, MainLayout
 ├── pages/             # LoginPage, RegisterPage, HomePage
 ├── routes/            # AppRoutes, ProtectedRoute, PublicRoute
 ├── store/
 │    ├── features/     # authSlice, applicationsSlice, uiSlice
 │    └── store.js
 └── utils/             # formatDate, statusBadgeStyles
```

## Redux Toolkit — Core Concepts Used

| Concept | Where it's used |
|---|---|
| `configureStore()` | `store/store.js` — combines all three slices |
| `createSlice()` | `authSlice`, `applicationsSlice`, `uiSlice` |
| Reducers | Add/update/delete applications, login/register users, toggle UI state |
| Actions | Dispatched from forms, buttons, and card interactions |
| `useSelector()` | Reading applications, auth state, and UI state across components |
| `useDispatch()` | Triggering all state changes throughout the app |

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Muhammad-Ayan-786/Redux-Toolkit-Mini-Hackathon.git

# Move into the project folder
cd Redux-Toolkit-Mini-Hackathon/Redux_Project

# Install dependencies
npm install

# Run the dev server
npm run dev
```

## Documentation

Full written documentation covering Redux Toolkit concepts, data flow, and my learning notes is available here: *[(https://tulip-mitten-166.notion.site/Redux-Toolkit-RTK-3a768b0d546780a3a4bfced9e11e715c)]*

## Author

Built by **Ayan** as part of the Sheryians Coding School Cohort 3.0 Mini Hackathon challenge.