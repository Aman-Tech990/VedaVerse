import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import MainElement from './layouts/MainElement';
import HeroSection from './pages/MainPage/HeroSection';
import AboutPage from './pages/About/AboutPage';
import ServicesPage from './pages/Services/ServicesPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import SchedulePage from './pages/Schedule/SchedulePage';
import LoginPage from './pages/Login/LoginPage';
import { RouterProvider } from 'react-router';
import DoctorDashboard from './pages/Dashboard/DoctorDashboard';
import ChatWindow from './pages/Chat/ChatWindow';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainElement />,
    children: [
      {
        path: "/",
        element: <HeroSection />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "services",
        element: <ServicesPage />
      },
      {
        path: "dashboard",
        element: <DashboardPage />
      },
      {
        path: "schedule",
        element: <SchedulePage />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "dashboard/doctor",
        element: <DoctorDashboard />
      },
      {
        path: "chat",
        element: <ChatWindow />
      },
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;