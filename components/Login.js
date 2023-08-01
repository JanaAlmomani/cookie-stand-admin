import { useAuth } from "../contexts/auth";

export default function Login(){
  const { login } = useAuth();

  function submitHandler(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const entry = {

      username: data.get("username"),
      password: data.get("password")

    };

    login(entry.username, entry.password);
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-100 w-full max-w-lg bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-green-300">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white text-center">
              Sign in to your account
            </h1>
            <form
              onSubmit={submitHandler}
              className="bg-green-300 space-y-4 md:space-y-6 p-6 rounded-lg "
          
            >
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white text-center "
                >
                  USER NAME
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="User Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white text-center"
                >
                  PASSWORD
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 text-black bg-green-500 hover:bg-primary-700 focus:ring-2 focus:ring-primary-300 font-medium rounded-lg text-lg  hover:bg-green-800"
              >
                SIGN IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


