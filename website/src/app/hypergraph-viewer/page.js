import BipartiteGraph from './graphComponent'
import Header from '../components/header';

export default function HypergraphViewer() {
    return (
      <main className="bg-black-100">
        <div className='w-full'>
          <Header />
        </div>
        <h1 className="text-3xl font-bold p-5 text-center">Hypergraph Viewer</h1>
        <BipartiteGraph />

        <div className="w-full p-5 bg-black-100">
        <h2 className="text-xl font-bold text-white mb-3">NECESSARY THINGS TO DO</h2>
        <ul className="list-none text-white space-y-2">
          <li className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 accent-green-500" defaultChecked/>
            <span>Do a test run of cytoscape js with dummy data</span>
          </li>
          <li className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 accent-green-500" />
            <span>Have some "Input your hypergraph" and we visualize it</span>
          </li>
          <li className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 accent-green-500" />
            <span>Have some default hypergraphs to select from</span>
          </li>
          <li className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 accent-green-500" />
            <span>Highlight detected clusters</span>
          </li>
        </ul>
      </div>

      
        
      </main>
    );
  }
  