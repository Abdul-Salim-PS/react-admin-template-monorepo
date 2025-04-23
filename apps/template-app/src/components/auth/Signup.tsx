import { SignupForm } from "ileaf-ui";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div>
      <SignupForm
        emailRegex={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
        onSubmit={async (data) => {
          console.log("first", data);
          navigate("/login");
        }}
        buttonText="Signup"
      />
    </div>
  );
};

export default Signup;
