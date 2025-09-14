import { Link } from "react-router-dom"; // Perbaiki import Link untuk react-router-dom
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Input } from "@heroui/react";
import toast from "react-hot-toast";

import { Navbar } from "@/components/navbar";
import { createUser } from "@/types/register";

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
      toast.success("Account created please to login")
    } catch (error: any) {
      setError(error?.response?.data?.message || "Login failed");
      toast.error("Register error please try again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="
    flex min-h-screen flex-col
    bg-cover bg-center bg-no-repeat
    relative"
    >
      <Navbar />

      <div className="flex flex-1 items-center justify-center p-4">
        <Card className="h-full w-md bg-blue-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-100">
          <CardBody>
            <h2 className="text-center text-2xl font-bold text-foreground mb-6">
              Sign up to your account
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
                type="username"
                value={username}
                variant="bordered"
                onChange={(e) => setUserName(e.target.value)}
              />
              <Input
                isRequired
                className="text-foreground"
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
                label="Password"
                placeholder="Enter your password"
                type="password"
                value={confirmPassword}
                variant="bordered"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {error && (
                <p className="text-center text-sm text-red-500">{error}</p>
              )}

              <Button
                className="w-full"
                color="primary"
                isLoading={isLoading}
                type="submit"
              >
                Sign In
              </Button>

              <p className="text-center text-sm text-foreground">
                have account?{" "}
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
    </div>
  );
};

export default RegisterPage;
