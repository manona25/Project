
import CardFeatures from './Card';  
import { DataFeatures } from './Data';  

function Projects() {
  return (
    <div className="projects">
      <div className="aq"></div>
      <h2 className="title">PROJECTS</h2>
      <div className="aw"></div>

      <div className="cards-container">
        {DataFeatures.map((feature) => (
          <CardFeatures key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
