import React, { useState } from "react";
import { truncateText } from "../../utils/utils";
import Pagination from '../pagination/Pagination'; // Import du composant de pagination

const ITEMS_PER_PAGE = 10; // Nombre d'éléments à afficher par page

const ComplistTable = ({ tableItems }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(tableItems.length / ITEMS_PER_PAGE);

  // Calcul de l'indice de début et de fin pour les éléments de la page actuelle
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Récupération des éléments de la page actuelle
  const currentItems = tableItems.slice(startIndex, endIndex);

  return (
    <div className="mt-8 w-full bg-gray-50 shadow-sm rounded-lg overflow-x-auto">
      <table className="w-full table-auto text-sm text-left">
        <thead className="text-gray-600 font-medium border-b">
          <tr>
            <th className="py-3 px-6">Compétition</th>
            <th className="py-3 px-6">Split</th>
            <th className="py-3 px-6">Format</th>
            <th className="py-3 px-6">Statut</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          {currentItems.map((item, idx) => (
            <tr key={idx}>
              <td className="flex items-center gap-x-3 py-3 px-6">
                <div className="w-[15%] border-pink-400 bg-cover bg-no-repeat bg-center mr-2">
                  <img
                    src={item["serie"]["leagueId"]["imageUrl"]}
                    alt="avatar"
                  />
                </div>
                <div>
                  <span className="block text-gray-700 text-sm font-medium truncate">
                    {truncateText(
                      item["serie"]["leagueId"]["name"],
                      20
                    )}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {truncateText(item["serie"]["fullName"], 20)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {truncateText(item.name, 20)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {truncateText(item["winner"]["name"], 25)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};

export default ComplistTable;
