
import CardFeatures from "./Card";
import { DataFeatures } from "./Data";

function Features() {
  return (
    <div className="App">
      {DataFeatures.map((feature) => (
        <CardFeatures key={feature.id} feature={feature} />
      ))}
    </div>
  );
}

export default Features;
