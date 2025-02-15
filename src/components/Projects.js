
import CardFeatures from './Card';  
import { DataFeatures } from './Data';  

function Projects() {
  return (
    <div className="projects">
      <div className='container4'>
      <div className="title4">
      <button className="project-button4">PROJECTS</button>
      </div>
      <div className="cards-container">
        {DataFeatures.map((feature) => (
          <CardFeatures key={feature.id} feature={feature} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Projects;
