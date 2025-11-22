window.addEventListener('load', async () => {
  let params = new URLSearchParams(window.location.search);
  let mapPath = decodeURI(params.get("store"));
  let mapName = decodeURI(params.get("name"));
  let baseUrl = `https://raw.githubusercontent.com/MCResourcePile/map-objects/refs/heads/main/objects/`;
  let parentDiv = document.getElementById('viewer');
  
  document.title = `${mapName} - ResourcePile`;
  document.querySelectorAll('[data-populate="name"]').forEach(node => {
    node.innerHTML = mapName;
  });
  
  let modelAssets = [];
  let textureCount = 0;
  
  if (!user._preferences.hasOwnProperty("model_textures") || user._preferences.model_textures === true) {
    const getTextureList = async () => {
      try {
        let encodedPath = mapPath.replaceAll(' ', '%20');
        let call = await fetch(`${baseUrl}${encodedPath}/minecraft.mtl`);
        if (!call.ok) throw new Error(`Response status: ${call.status}`);
        let res = await call.text();
        let textures = res.match(/map_Kd\s+(.*)/g);
        textures = textures.map((t) => {
          return t.replace("map_Kd tex", "https://raw.githubusercontent.com/MCResourcePile/map-objects/refs/heads/main/textures");
        });
        return textures;
      } catch (e) {
        console.error(e.message);
        return [];
      }
    }
    modelAssets = await getTextureList();
    textureCount = modelAssets.length;
  }
  
  let encodedPath = mapPath.replaceAll(' ', '%20');
  modelAssets.push(`${baseUrl}${encodedPath}/minecraft.obj`);
  modelAssets.push(`${baseUrl}${encodedPath}/minecraft.mtl`);
  
  
  let viewer = new OV.EmbeddedViewer(parentDiv, {
    backgroundColor: new OV.RGBColor(122, 168, 255, 255),
    onModelLoaded: () => {
      progressDiv.remove();
    }
  });
  
  let progressDiv = document.getElementById("viewer-progress");
  let progressBar = document.getElementById("viewer-progress-bar");
  let progressTitle = document.getElementById("viewer-progress-title");
  let loadedFiles = 0;
  let totalFiles = modelAssets.length;
  let trackedUrls = new Set();
  
  const checkLoadedAssets = () => {
    const resources = performance.getEntriesByType('resource');
    let newlyLoaded = 0;
    
    resources.forEach(resource => {
      const matchingAsset = modelAssets.find(asset => 
        resource.name.includes(asset) || asset.includes(resource.name)
      );
      
      if (matchingAsset && !trackedUrls.has(resource.name)) {
        trackedUrls.add(resource.name);
        loadedFiles++;
        newlyLoaded++;
      }
    });
    
    if (newlyLoaded > 0) {
      let percentage = Math.round((loadedFiles / totalFiles) * 100);
      let detailText = '';
      
      if (textureCount > 0 && loadedFiles <= textureCount) {
        detailText = `Loading textures: ${loadedFiles}/${textureCount}`;
      } else if (textureCount > 0 && loadedFiles > textureCount) {
        detailText = `Loading model files: ${loadedFiles - textureCount}/${totalFiles - textureCount}`;
      } else {
        detailText = `Loading files: ${loadedFiles}/${totalFiles}`;
      }
      
      progressTitle.innerText = detailText;
      progressBar.style.width = `${percentage}%`;
    }
    
    if (loadedFiles >= totalFiles) {
      clearInterval(progressInterval);
      setTimeout(() => {
        if (progressDiv.parentNode) {
          progressDiv.remove();
        }
      }, 500);
    }
  };
  
  const progressInterval = setInterval(checkLoadedAssets, 100);
  if (window.PerformanceObserver) {
    const observer = new PerformanceObserver((list) => {
      checkLoadedAssets();
    });
    observer.observe({ entryTypes: ['resource'] });
  }
  
  viewer.LoadModelFromUrlList(modelAssets);
  
  const canvas = parentDiv.querySelector('canvas');
  parentDiv.addEventListener('mousedown', () => {
    canvas.classList.add('grabbing');
  });
  parentDiv.addEventListener('mouseup', () => {
    canvas.classList.remove('grabbing');
  });
});