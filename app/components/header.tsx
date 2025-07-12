// app/ui/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold text-gray-800">
        JIDA Dashboard
      </div>
      <div>
        {/* Tempatkan avatar/user menu di sini jika perlu */}
        <span className="inline-block w-8 h-8 bg-gray-300 rounded-full"></span>
      </div>
    </header>
  );
};

export default Header;