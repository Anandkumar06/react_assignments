import React, { useState } from 'react'

export default function DropdownDeatails() {
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Options for the dropdown with label and details
  const options = [
    { label: 'Option 1', details: 'Details for Option 1' },
    { label: 'Option 2', details: 'Details for Option 2' },
    { label: 'Option 3', details: 'Details for Option 3' },
    { label: 'Option 4', details: 'Details for Option 4' },
  ];

  // Event handler for when the dropdown value changes
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Function to find details for the selected option
  const findDetails = () => {
    const selectedOptionObject = options.find((option) => option.label === selectedOption);
    return selectedOptionObject ? selectedOptionObject.details : '';
  };

  return (
    <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Display details for the selected option */}
      {selectedOption && (
        <div>
          <h2>Details for {selectedOption}:</h2>
          <p>{findDetails()}</p>
        </div>
      )}
    </div>
  );
}
