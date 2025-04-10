"use client";  // Make sure this is at the top of the file

const SleekDropdown = ({ label, options, onChange }) => {
  return (
    <div className="w-full p-5 bg-black-100">
      <label htmlFor="dropdown" className="block text-white text-lg font-bold mb-2">
        {label}
      </label>
      <select
        id="dropdown"
        className="w-full p-3 bg-black border border-white text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        onChange={onChange} // Make sure the onChange prop is correctly used here
      >
        {options.map((option, index) => (
          <option key={index} value={option.value} className="text-white">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SleekDropdown;
