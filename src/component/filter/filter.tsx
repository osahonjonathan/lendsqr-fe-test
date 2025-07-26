import React from 'react';

export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'select' | 'date';
  options?: string[];
}

interface FilterProps {
  fields: FieldConfig[];
  filterValues: Record<string, string>;
  onFilterChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onFilter: () => void;
  onClear: () => void;
}

const UserTableFilter = ({
  fields,
  filterValues,
  onFilterChange,
  onFilter,
  onClear,
}: FilterProps) => {
  return (
    <div className="filter-popup">
      {fields.map((field) => (
        <div className="fields" key={field.name}>
          <label>{field.label}</label>
          {field.type === 'select' ? (
            <select
              name={field.name}
              value={filterValues[field.name] || ''}
              onChange={onFilterChange}
            >
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option || 'Select'}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={filterValues[field.name] || ''}
              onChange={onFilterChange}
              placeholder={field.label}
            />
          )}
        </div>
      ))}
      <div className="filter-actions">
        <button className="btn-outline " onClick={onClear}>
          Reset
        </button>
        <button className="teal-btn " onClick={onFilter}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default UserTableFilter;
