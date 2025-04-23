import { AuthLayout } from "ileaf-ui";
import { Outlet } from "react-router-dom";
import Bg from "../../assets/auth-layout.png";

const Layout = () => {
  return (
    <div className="flex w-full mx-auto justify-center items-center min-h-screen py-5 lg:h-screen font-primary">
      <AuthLayout
        logoSrc="https://www.ileafsolutions.com/assets/images/logo.svg"
        headerColor="#fff"
        backgroundImage={Bg}
      >
        <Outlet />
      </AuthLayout>
    </div>
  );
};

export default Layout;
