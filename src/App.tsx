import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchBar } from './components/SearchBar';
import { CandidateTable } from './components/CandidateTable';
import { Candidate } from './types';

function App() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/candidates');
        setCandidates(response.data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, []);

  const filteredCandidates = candidates.filter((candidate) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      candidate.name.toLowerCase().includes(searchLower) ||
      candidate.skills.some((skill) => skill.toLowerCase().includes(searchLower))
    );
  });

  const sortedCandidates = [...filteredCandidates].sort((a, b) => {
    return sortAscending
      ? a.yearsOfExperience - b.yearsOfExperience
      : b.yearsOfExperience - a.yearsOfExperience;
  });

  const handleSort = () => {
    setSortAscending(!sortAscending);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900">Candidate List Viewer</h1>
        <div className="mt-6">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
        <CandidateTable candidates={sortedCandidates} onSort={handleSort} />
      </div>
    </div>
  );
}

export default App;
