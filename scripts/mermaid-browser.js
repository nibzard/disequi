// mermaid-browser.js
// This file initializes mermaid in the browser

document.addEventListener('DOMContentLoaded', function() {
  const mermaidBlocks = document.querySelectorAll('.mermaid');
  
  if (mermaidBlocks.length > 0) {
    // Dynamically load the mermaid library
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js';
    script.onload = function() {
      // Initialize mermaid with custom themes
      window.mermaid.initialize({
        startOnLoad: true,
        theme: "dark",
        themeVariables: {
          primaryColor: "#10b981", // green-500
          primaryTextColor: "#f0fdf4", // green-50
          primaryBorderColor: "#10b981", // green-500
          lineColor: "#10b981", // green-500
          secondaryColor: "#065f46", // green-800
          tertiaryColor: "#000000", // black
          background: "#000000", // black background
          mainBkg: "#022c22", // dark green background
          nodeBorder: "#10b981", // green-500
          clusterBkg: "#022c22", // dark green background
          clusterBorder: "#10b981", // green-500
          titleColor: "#f0fdf4", // green-50
          edgeLabelBackground: "#022c22", // dark green background
          nodeTextColor: "#f0fdf4", // green-50
        },
        securityLevel: "loose",
        flowchart: {
          htmlLabels: true,
          curve: "cardinal",
        }
      });
      
      // Force render all diagrams
      window.mermaid.init(undefined, mermaidBlocks);
    };
    
    document.head.appendChild(script);
  }
});