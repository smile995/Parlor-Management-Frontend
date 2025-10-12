# Parlour Management System

A modern web application for managing salon operations, built with **React**, **TypeScript**, **Vite**, **MUI**, **TailwindCSS**, and **DaisyUI**.

---

## About

Parlour Management System is designed to streamline salon operations, making it easy for customers to book services, view team profiles, and get support. Admins can manage services, bookings, and team members efficiently.

---

## Features

- Customer, Admin, and Public routes with role-based layouts
- Service listing, booking, and management
- Team member profiles and reviews
- FAQ and contact forms
- Responsive design with Material UI and TailwindCSS
- Social login options (Google, Facebook)
- Dummy data for services, teammates, reviews, and FAQs

---

## Main Modules

- **Home Page:** Showcases services, team, reviews, and FAQs.
- **Booking System:** Allows customers to book appointments and view booking history.
- **Admin Dashboard:** Manage services, bookings, team members, and customer queries.
- **Authentication:** Supports social login and role-based access.
- **Contact & Support:** Customers can reach out for help or inquiries.

---

## Project Structure

```
src/
  App.tsx
  main.tsx
  index.css
  Components/
    Home/
    shared/
    Teammates/
  DummyData/
    faq.ts
    reviews.ts
    Services.ts
    teammates.ts
  LayOut/
    AdminLayout.tsx
    CustomerLayout.tsx
    MainLayOut.tsx
  Pages/
    Public/
      ContactUs.tsx
    Customer/
    Admin/
    Auth/
  Redux/
  Routers/
    Routes.tsx
    AdminRoutes.tsx
    CustomerRoutes.tsx
    PublicRoutes.tsx
    PrivateRoutes/
  Types/
  Utils/
public/
  FakeData/
  LottiAnimations/
  assets/
```

---

## How It Works

- **Routing:** Uses React Router for public, customer, and admin routes.
- **State Management:** Redux is used for global state (authentication, bookings, etc.).
- **UI:** Combines Material UI and TailwindCSS for a modern, responsive interface.
- **Dummy Data:** Easily customizable for services, team, reviews, and FAQs.

---

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee)

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```

### Build

```sh
npm run build
```

### Preview

```sh
npm run preview
```

### Lint

```sh
npm run lint
```

---

## Customization

- Update dummy data in [`src/DummyData`](src/DummyData)
- Add new pages/components in [`src/Pages`](src/Pages) and [`src/Components`](src/Components)
- Configure routes in [`src/Routers`](src/Routers)

---

## Contact & Support Page

The `ContactUs.tsx` page provides users with a welcoming banner and a section for contact information. The page is designed to help users reach out for support and inquiries.

**File:** `src/Pages/Public/ContactUs.tsx`

**Features:**
- Banner image and subtitle introducing the support team
- Section for contact information (content coming soon)
- Uses shared components for consistent design

---

## Contribution

Feel free to fork the repository, create issues, or submit pull requests for improvements or new features.

---

## Support

For questions or support, use the Contact & Support page in the app or open an issue on GitHub.

---

## License

MIT

---

For more details, see the code and comments in each file.