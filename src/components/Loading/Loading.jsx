import React, { useState, useEffect } from "react";

const Loading = () => {
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    let totalResources = 0;
    let loadedResources = 0;

    // Function to update the loading percentage
    const updateLoadingProgress = () => {
      const percent = Math.floor((loadedResources / totalResources) * 100);
      setLoadingPercent(percent);
    };

    // Function to handle the load event for each resource
    const handleResourceLoad = () => {
      loadedResources++;
      updateLoadingProgress();
    };

    // Listen for the page's resources loading
    const trackResourcesLoading = () => {
      // Count all images, scripts, and other elements
      const allResources = [...document.images, ...document.scripts];
      totalResources = allResources.length;

      // Add event listeners to track each resource's load event
      allResources.forEach((resource) => {
        if (resource.complete) {
          // If the resource is already loaded, simulate the load
          loadedResources++;
        } else {
          // Otherwise, listen for the load event
          resource.addEventListener("load", handleResourceLoad);
        }
      });

      // Check if we already loaded all resources (when it's an empty page or no resources)
      if (totalResources === 0) {
        setLoadingPercent(100);
      }
    };

    // Track resource loading progress when the page starts loading
    trackResourcesLoading();

    // Listen for when the whole page has finished loading
    window.addEventListener("load", () => {
      setLoadingPercent(100); // Set to 100% when all resources are loaded
    });

    // Clean up listeners
    return () => {
      window.removeEventListener("load", handleResourceLoad);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: "100%",
            backgroundColor: "#e0e0e0",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              width: `${loadingPercent}%`,
              height: "20px",
              backgroundColor: "#4caf50",
              borderRadius: "10px",
            }}
          />
        </div>
        <p>{loadingPercent}%</p>
      </div>
    </div>
  );
};

export default Loading;
