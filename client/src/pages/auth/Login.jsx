import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/axios";


function Login() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

    const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const { data } = await API.post(
      "/auth/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem(
      "token",
      data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(data.user)
    );

    if (
      data.user.role === "manager"
    ) {
      navigate(
        "/manager/dashboard"
      );
    } else {
      navigate("/dashboard");
    }

  } catch (error) {
    console.log(error);

    alert(
      error?.response?.data
        ?.message ||
        "Invalid Credentials"
    );
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="w-96 shadow-lg p-6 rounded-lg"
      >
        <h1 className="text-2xl font-bold mb-4">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          className="bg-blue-500 text-white w-full p-2 rounded"
        >
          Login
        </button>

        <p className="text-sm mt-3 text-center">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>

      </form>

    </div>
  );
}

export default Login;