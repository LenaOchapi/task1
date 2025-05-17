"use client";

import { useState } from "react";
import CustomInput from "@/app/components/CustomInput";
import CustomButton from "@/app/components/CustomButton";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (login === "Admin" && password === "pswrd") {
      router.push("/home");
    } else {
      alert("Неверный логин или пароль");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Вход в личный кабинет
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col gap-5"
        >
          <CustomInput
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Логин"
            type="text"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <CustomInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            type="password"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <CustomButton
            type="submit"
            text="Войти"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
          />
        </form>
      </div>
    </div>
  );
}


