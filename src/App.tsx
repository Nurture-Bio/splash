import { NavBar } from "./components/NavBar.tsx";
import { HomePage } from "./pages/HomePage.tsx";

export default function App() {
  return (
    <div className="grain" style={{ height: "100dvh", overflow: "hidden" }}>
      <NavBar />
      <main style={{ height: "100%" }}>
        <HomePage />
      </main>
    </div>
  );
}
