import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H5 from "@material-tailwind/react/Heading5";
import InputIcon from "@material-tailwind/react/InputIcon";
import Checkbox from "@material-tailwind/react/Checkbox";
import Button from "@material-tailwind/react/Button";
import DefaultNavbar from "components/DefaultNavbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginAction } from "../../redux/actions/authActions";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("password");

  const validEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validEmail.test(email) || email === "")
      return toast.error("Enter a Valid a Email");
    if (!password || password === "") return toast.error("Please Enter");
    const data = {
      email: email,
      password: password,
    };

    dispatch(loginAction(data));
  };
  return (
    <div className="bg-blue-400 bg-cover bg-center w-screen h-screen relative flex flex-col justify-between">
      <DefaultNavbar />
      <div className="flex justify-center">
        <div className="max-w-sm w-96">
          <Card>
            <CardHeader color="purple">
              <H5 color="white" style={{ marginBottom: 0 }}>
                Login
              </H5>
            </CardHeader>

            <CardBody>
              <div className="mb-12 px-4 bg-bb">
                <InputIcon
                  type="email"
                  color="purple"
                  placeholder="Email Address"
                  iconName="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  error={!validEmail.test(email)}
                  success={validEmail.test(email)}
                />
              </div>
              <div className="mb-8 px-4">
                <InputIcon
                  type="password"
                  color="purple"
                  placeholder="Password"
                  iconName="lock"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  error={!password.length < 4}
                  success={password.length >= 3}
                />
              </div>
              <div className="mb-4 px-4">
                <Checkbox color="green" text="Remember Me" id="remember" />
              </div>
            </CardBody>
            <CardFooter>
              <div className="flex justify-center bg-bb">
                <Button
                  onClick={handleLogin}
                  color="purple"
                  size="lg"
                  ripple="dark"
                >
                  Login
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
