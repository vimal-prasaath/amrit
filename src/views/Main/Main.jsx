import { Header, Footer } from "components";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Main;
