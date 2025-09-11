
import DefaultLayout from "@/layouts/default";

export default function HandleForgotPassword() {
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
            FORGOT PASSWORD
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" className="space-y-6" method="POST">
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
                  <a
                    className="font-semibold text-indigo-400 hover:text-indigo-300"
                    href={}
                  >
                    Forgot password?
                  </a>
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
                />
              </div>
            </div>

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Not a member?
            <a
              className="font-semibold text-indigo-400 hover:text-indigo-300"
              href="#"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
}
