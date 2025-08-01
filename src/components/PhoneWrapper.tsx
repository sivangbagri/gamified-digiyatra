// components/PhoneScreenWrapper.tsx
import React from 'react';
import type { ReactNode } from 'react';


interface PhoneScreenWrapperProps {
  children: ReactNode;
}

const PhoneScreenWrapper: React.FC<PhoneScreenWrapperProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-[475px] h-[812px] bg-white rounded-[40px] shadow-2xl overflow-hidden border-8 border-gray-800">
        <div className="h-full overflow-y-auto scroll-smooth">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhoneScreenWrapper;
