// Importing React elements
import { Outlet } from "react-router-dom";
import styled from "styled-components";

// Importing components
import Footer from "./Footer";
import Header from "./Header";

const Div = styled.div`
 display: grid;
 grid-template-rows: auto 1fr auto;
 height: 100vh;
`;

const Layout = () => {
 return (
  <Div>
   <Header />
   <Outlet />
   <Footer />
  </Div>
 );
};

export default Layout;
