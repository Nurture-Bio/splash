import { NavBar } from "./components/NavBar.tsx";
import { HomePage } from "./pages/HomePage.tsx";

export default function App() {
  return (
    <div className="grain">
      <NavBar />

      <main>
        <HomePage />
      </main>

      <footer className="container-site footer-site">
        <span className="label">&copy; {new Date().getFullYear()} Nurture Bio</span>
        <span className="label">Confidential</span>
      </footer>
    </div>
  );
}
