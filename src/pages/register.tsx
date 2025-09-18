import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Input } from "@heroui/react";
import toast from "react-hot-toast";

import { createUser } from "@/service/createUser";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (password !== confirmPassword) {
      setError("Password and confirm password do not match!");
      setIsLoading(false);

      return;
    }

    try {
      await createUser({ username, email, password });

      navigate("/home");
      toast.success("Account created, please login");
    } catch (error: any) {
      setError(error?.response?.data?.message || "Register failed");
      toast.error("Register error, please try again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="h-full p-5 w-md bg-blue-600 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-100">
        <CardBody>
          <h2 className="text-center text-2xl font-bold text-foreground mb-6">
            Sign Up
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              isRequired
              className="text-foreground"
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={email}
              variant="bordered"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              isRequired
              className="text-foreground"
              label="username"
              placeholder="Enter your username"
              type="text"
              value={username}
              variant="bordered"
              onChange={(e) => setUserName(e.target.value)}
            />

            <Input
              isRequired
              className="text-foreground "
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={password}
              variant="bordered"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Input
              isRequired
              className="text-foreground"
              label="Confirm Password"
              placeholder="Re-enter your password"
              type="password"
              value={confirmPassword}
              variant="bordered"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <p className="text-start mx-2 text-foreground text-xs">
              Forgot password?{" "}
              <Link
                className="font-semibold text-primary hover:underline"
                to="/change-password"
              >
                Change password
              </Link>
            </p>
            {error && (
              <p className="text-center text-sm text-red-500">{error}</p>
            )}

            <Button
              className="w-full"
              color="primary"
              isLoading={isLoading}
              type="submit"
            >
              Register
            </Button>

            <p className="text-center text-sm text-mx text-foreground">
              have a account?{" "}
              <Link
                className="font-semibold text-primary hover:underline"
                to="/login"
              >
                Login
              </Link>
            </p>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default RegisterPage;
