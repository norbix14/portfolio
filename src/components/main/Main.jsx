import NestSection from './sections/nest/NestSection';
import NodeSection from './sections/node/NodeSection';
import ReactSection from './sections/react/ReactSection';
import VanillaSection from './sections/vanilla/VanillaSection';

function Main() {
  return (
    <div className="container-main" id="main">
      <NodeSection />
      <NestSection />
      <ReactSection />
      <VanillaSection />
    </div>
  );
}

export default Main;
