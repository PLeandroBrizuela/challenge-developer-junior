import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import { useContext } from "react";
import { ProgressContext } from "./context/context";
import MyBoookings from "./components/my-bookings/my-boookings";

export default function App() {
  const { menuActive } = useContext(ProgressContext);

  return (
    <main className="px-4 py-2 select-none w-screen flex flex-col overflow-x-hidden md:items-center">
      <div className="md:max-w-[600px]">
        {menuActive == 0 ? (
          <>
            <Header />
            <Menu />
          </>
        ) : (
          <MyBoookings />
        )}
        <Footer />
      </div>
    </main>
  );
}
