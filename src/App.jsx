import Sidebar from "./Sidebar";
import Landing from "./Landing";

export default function Portfolio() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="app-content">
        <Landing />
      </main>
    </div>
  );
}
