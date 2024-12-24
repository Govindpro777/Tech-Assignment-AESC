import React from 'react';
import { Candidate } from '../types';

interface CandidateTableProps {
  candidates: Candidate[];
  onSort: () => void;
}

export function CandidateTable({ candidates, onSort }: CandidateTableProps) {
  return (
    <table className="w-full mt-4 border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Name</th>
          <th className="border border-gray-300 p-2">Skills</th>
          <th className="border border-gray-300 p-2">
            <button onClick={onSort} className="text-blue-500">Years of Experience</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((candidate) => (
          <tr key={candidate.id}>
            <td className="border border-gray-300 p-2">{candidate.name}</td>
            <td className="border border-gray-300 p-2">{candidate.skills.join(', ')}</td>
            <td className="border border-gray-300 p-2">{candidate.yearsOfExperience}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
