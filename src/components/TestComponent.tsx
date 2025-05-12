import React from 'react';
import { Button } from '@/components/ui/button';

interface TestComponentProps {
  title?: string;
}

export default function TestComponent({ title = 'React with Tailwind CSS' }: TestComponentProps) {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-4 mt-10">
      <h1 className="text-2xl font-bold text-primary-600">{title}</h1>
      
      <p className="text-gray-600 text-center">
        This is a test component to verify that React and Tailwind CSS are working correctly together.
      </p>
      
      <div className="grid grid-cols-2 gap-4 w-full">
        <Button variant="default" size="lg">
          Primary Button
        </Button>
        
        <Button variant="secondary" size="lg">
          Secondary Button
        </Button>
      </div>
      
      <div className="mt-4 p-4 bg-gray-100 rounded-lg w-full">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Tailwind Features:</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Custom colors</li>
          <li>Responsive design</li>
          <li>Component styling</li>
          <li>Utility classes</li>
        </ul>
      </div>
    </div>
  );
}
