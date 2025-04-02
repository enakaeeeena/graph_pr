import { useState } from 'react';

type SortDirection = 'asc' | 'desc' | null;

const SortableTable = ({ data }: { data: Record<string, any>[] }) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: SortDirection;
  } | null>(null);

  const requestSort = (key: string) => {
    let direction: SortDirection = 'asc';
    if (sortConfig && sortConfig.key === key) {
      if (sortConfig.direction === 'asc') {
        direction = 'desc';
      } else {
        direction = null;
      }
    }
    setSortConfig(direction ? { key, direction } : null);
  };

  const sortedData = [...data];
  if (sortConfig && sortConfig.direction) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="sortable-table my-4">
      <h2>Задание 3</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column} onClick={() => requestSort(column)} style={{ cursor: 'pointer' }}>
                  {column}
                  {sortConfig?.key === column && (
                    <span className="ms-1">
                      {sortConfig.direction === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column}>{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SortableTable;