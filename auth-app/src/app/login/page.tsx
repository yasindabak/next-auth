"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-10 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Hoş Geldin 👋</h1>
          <p className="text-gray-600">Devam etmek için Auth0 ile giriş yap</p>
        </div>

        <button
          onClick={() =>
            signIn("auth0", { callbackUrl: "/dashboard", prompt: "login" })
          }
          className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          🔐 Sign in with Auth0
        </button>
      </div>
    </div>
  );
}
