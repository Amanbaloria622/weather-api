import { createRoot } from "react-dom/client";
import React from "react";
import { Nav } from "./src/components/Nav";
import { Body } from "./src/components/main";
import { Footer } from "./src/components/Footer";

// eslint-disable-next-line react-refresh/only-export-components
const AppLayout = () => {
  return (
    <>
      <Nav></Nav>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);
