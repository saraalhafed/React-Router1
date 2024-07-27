import React from 'react';
import { Outlet } from 'react-router-dom';


  
    
    
    const Projects = () => {
      // projects route is a wrapping route. to see its children we need to use Outlet component
      return (
        <div>
          Projects
          <Outlet /> {/* allowes to see the content in nested route */}
        </div>
      );
    };
    
    export default Projects;
    
  
