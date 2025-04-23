import { LoginForm } from "ileaf-ui";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <LoginForm
        emailRegex={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
        onSubmit={async (data) => {
          console.log("first", data);
          navigate("/");
        }}
        buttonText="Login"
      />
    </div>
  );
};

export default Login;
