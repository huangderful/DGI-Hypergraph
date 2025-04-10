"use client";
import Header from '../components/header';
import SleekDropdown from '../components/SleekDropdown';
export default function datasetViewer() {
  const options = [
    { value: 'broadInput', label: 'Drug => Genes' },
    { value: 'broadInput', label: 'Disease => Genes' },
    { value: 'broadInput', label: 'Disease => Drugs' },
  ];
  
  const handleChange = (event) => {
    console.log('Selected:', event.target.value);
  };
  return (
      <main className="bg-black-100">
        <div className='w-full'>
          <Header />
        </div>
        <h1 className="text-3xl font-bold p-5 text-center">Dataset Viewer</h1>
        
        <SleekDropdown label="Select an Option" options={options} onChange={handleChange} />
        <div className="w-full p-5 bg-black-100">
        <h2 className="text-xl font-bold text-white mb-3">NECESSARY THINGS TO DO</h2>
        <ul className="list-none text-white space-y-2">
          <li className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 accent-green-500"/>
            <span>Have default selected datasets</span>
          </li>
          <li className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 accent-green-500" />
            <span>Input a drug ={'>'} get all the genes possibly affected</span>
          </li>
          <li className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 accent-green-500" />
            <span>Input a disease ={'>'} get all the drugs possibly affected</span>
          </li>
          <li className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 accent-green-500" />
            <span>Input a disease ={'>'} get all the genes possibly affected</span>
          </li>
          <li className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 accent-green-500" />
            <span>Download the thing</span>
          </li>
        </ul>
      </div>

      
        
      </main>
    );
  }
  