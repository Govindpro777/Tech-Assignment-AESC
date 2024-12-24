import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
        placeholder="Search by name or skills..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <Search className="absolute top-2 inset-y-0 left-2 w-6 h-6 text-gray-400" />
    </div>
  );
}
