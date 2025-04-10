"use client";  // Make sure this is at the top of the file

import Header from '../components/header';
import SleekDropdown from '../components/SleekDropdown';

export default function methods() {
    const methodOptions = [
      { value: 'DDDB', label: 'Drug-Gene Dataset' },
      { value: 'DGIDB', label: 'MSigDB' },
    ];
    const handleChange = (event) => {
      console.log('Selected:', event.target.value);
    };
    return (
      <main className="bg-black-100">
        <div className='w-full'>
          <Header />
        </div>
        <h1 className="text-3xl font-bold p-5 text-center">Generate Hypergraph</h1>
        <SleekDropdown label="Select an Option" options={methodOptions} onChange={handleChange} />

        <div className="w-full p-5 bg-black-100">
        <h2 className="text-xl font-bold text-white mb-3">NECESSARY THINGS TO DO</h2>
        <ul className="list-none text-white space-y-2">
          <li className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 accent-green-500"/>
            <span>Input disease(s) ={'>'} get the hypergraph associated</span>
          </li>
          
          <li className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 accent-green-500"/>
            <span>Generate a KHOP graph</span>
          </li>
        </ul>
      </div>

      
        
      </main>
    );
  }
  