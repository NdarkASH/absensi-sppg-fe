import { Link } from "react-router-dom"; // Perbaiki import Link untuk react-router-dom
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Input } from "@heroui/react";

import { login as apiLogin } from "@/types/login";
import { useAuth } from "@/components/AuthUser";
import { ThemeSwitch } from "@/components/theme-switch";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const loginResponse = await apiLogin({ email, password });

      login(loginResponse.token);
      navigate("/home");
    } catch (error: any) {
      setError(error?.response?.data?.message || "Login failed");
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
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeSwitch />
      </div>
      <div className="flex flex-1 items-center justify-center p-4">
        <Card className="h-full w-md bg-blue-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-100">
          <CardBody>
            <h2 className="text-center text-2xl font-bold text-foreground mb-6">
              Please input You&rsquo;re email
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

              {error && (
                <p className="text-center text-sm text-red-500">{error}</p>
              )}

              <Button
                className="w-full my-2"
                color="primary"
                isLoading={isLoading}
                type="submit"
              >
                Submit
              </Button>

              <p className="text-center text-sm text-mx text-foreground">
                No account?{" "}
                <Link
                  className="font-semibold text-primary hover:underline"
                  to="/register"
                >
                  Register
                </Link>
              </p>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ChangePassword;
