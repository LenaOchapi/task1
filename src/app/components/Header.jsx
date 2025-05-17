"use client";

export default function Header() {
  const handleLogout = () => {
    location.href = '/login';
  };

  return (
    <header className="bg-indigo-900 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-semibold">Очень крутое название</h1>
      <button 
        onClick={handleLogout} 
        className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-4 py-2 rounded-md font-medium"
      >
        Выйти
      </button>
    </header>
  );
}
