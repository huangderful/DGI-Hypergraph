'use client'

// HypergraphViewer.js
import React, { useState, useEffect, useMemo } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

const BipartiteGraph = () => {
  // Sample hypergraph data
  const sampleData = {
    nodes: [
      { id: 'GeneA', type: 'gene' },
      { id: 'GeneB', type: 'gene' },
      { id: 'GeneC', type: 'gene' },
    ],
    hyperedges: [
      { id: 'Edge1', nodes: ['GeneA', 'GeneB', 'GeneC'], type: 'DrugX' },
    ],
  };

  // Format nodes and edges for Cytoscape
  const formatHypergraph = (data) => {
    if (!data || !data.nodes || !data.hyperedges) {
      return [];
    }

    // Gene nodes on the left
    const geneNodes = data.nodes.map((node, index) => ({
      data: { id: node.id, label: node.id, type: 'gene' },
      position: { x: 100, y: index * 100 }, // Manually position genes on the left
    }));

    // Hyperedge (drug) nodes on the right
    const hyperedgeNodes = data.hyperedges.map((edge, index) => ({
      data: { id: edge.id, label: edge.type, type: 'hyperedge' },
      position: { x: 400, y: index * 100 }, // Manually position hyperedges on the right
    }));

    // Edges connecting gene nodes to hyperedges
    const edges = data.hyperedges.flatMap((edge) =>
      edge.nodes.map((nodeId) => ({
        data: {
          id: `${edge.id}-${nodeId}`,
          source: nodeId,
          target: edge.id,
          label: edge.type,
        },
      }))
    );

    return [...geneNodes, ...hyperedgeNodes, ...edges];
  };

  // State for search input
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedGene, setHighlightedGene] = useState(null);
  const [highlightedEdges, setHighlightedEdges] = useState([]);

  // Format elements with useMemo to avoid unnecessary recalculations
  const elements = useMemo(() => formatHypergraph(sampleData), []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const term = e.target.value.trim();
    setSearchTerm(term);

    if (term) {
      // Check if a gene matches the search term
      const matchedGene = sampleData.nodes.find((node) => node.id === term);
      if (matchedGene) {
        setHighlightedGene(matchedGene.id);

        // Get all edges connected to the highlighted gene
        const connectedEdges = sampleData.hyperedges.flatMap((edge) =>
          edge.nodes.includes(matchedGene.id) ? [`${edge.id}-${matchedGene.id}`] : []
        );
        setHighlightedEdges(connectedEdges);
      } else {
        setHighlightedGene(null);
        setHighlightedEdges([]);
      }
    } else {
      setHighlightedGene(null);
      setHighlightedEdges([]);
    }
  };

  return (
    <div style={{ height: '600px', width: '100%' }} className='flex flex-col items-center'>
      {/* Input bar for search */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search for a gene..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: '8px',
            width: '300px',
            border: '4px solid #808080',
            borderRadius: '4px',
          }}
          className='bg-gray-900'
        />
      </div>

      {/* Cytoscape graph */}
      {elements && elements.length > 0 ? (
        <CytoscapeComponent
          elements={elements}
          style={{ width: '100%', height: '550px' }}
          className='border border-white'
          layout={{
            name: 'preset', // Use preset layout to honor manual positions
            fit: true,
            padding: 30,
            
          }}
          stylesheet={[
            {
              selector: 'node',
              style: {
                label: 'data(label)',
                width: 30,
                height: 30,
                backgroundColor: (ele) => {
                  // Highlight matched gene in yellow
                  if (ele.data('id') === highlightedGene) {
                    return '#ffeb3b'; // Yellow for highlighted gene
                  }
                  // Default colors
                  return ele.data('type') === 'gene' ? '#61bffc' : '#f76c6c';
                },
                shape: (ele) => (ele.data('type') === 'gene' ? 'ellipse' : 'rectangle'),
                borderWidth: 1,
                borderColor: '#333',
                color: '#ffffff',
              },
            },
            {
              selector: 'edge',
              style: {
                width: 2,
                lineColor: (ele) =>
                  highlightedEdges.includes(ele.data('id')) ? '#ffeb3b' : '#ccc',
                targetArrowShape: 'ellipse',
                curveStyle: 'bezier',
              },
            },
          ]}
        />
      ) : (
        <p>Loading graph...</p>
      )}
    </div>
  );
};

export default BipartiteGraph;
