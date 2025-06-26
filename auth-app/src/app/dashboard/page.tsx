import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="bg-white text-black p-10 rounded-xl shadow-2xl w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="mb-2">👋 Hoş geldin <strong>{session.user?.name}</strong></p>
        <p className="mb-4">📧 {session.user?.email}</p>

        <form action="/api/auth/signout" method="POST">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Çıkış Yap
          </button>
        </form>
      </div>
    </div>
  );
}
