import { Link } from "react-router-dom"; // Perbaiki import Link untuk react-router-dom
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DefaultLayout from "@/layouts/default";
import { login as apiLogin } from "@/types/login";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const loginResponse = await apiLogin({ email, password });

      localStorage.setItem("token", loginResponse.token);

      navigate("/attendance");
    } catch (error: any) {
      setError(error?.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            className="mx-auto h-10 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-sm/6 font-medium text-gray-100"
                htmlFor="email"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  id="email"
                  name="email"
                  type="email"
                  value={email} // Binding input value to state
                  onChange={(e) => setEmail(e.target.value)} // Update state on change
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  className="block text-sm/6 font-medium text-gray-100"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link to="/change-password">
                    {" "}
                    {/* Menggunakan Link dari react-router-dom */}
                    <span className="font-semibold text-indigo-400 hover:text-indigo-300 text-small">
                      Forgot password?
                    </span>
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  id="password"
                  name="password"
                  type="password"
                  value={password} // Binding input value to state
                  onChange={(e) => setPassword(e.target.value)} // Update state on change
                />
              </div>
            </div>

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                disabled={isLoading} // Disable button when loading
                type="submit"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>

          {error && (
            <p className="mt-2 text-center text-sm text-red-500">{error}</p> // Display error message
          )}

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            No account?&nbsp;
            <Link
              className="font-semibold text-indigo-400 hover:text-indigo-300"
              to="register" // Menggunakan Link dari react-router-dom
            >
              Register&nbsp;
            </Link>
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default LoginPage;
