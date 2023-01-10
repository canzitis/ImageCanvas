import './App.css';
import ImageCanvas from './imageCanvas'

const App = () => (
  <main>
    <ImageCanvas
      scrollHeight={3500}
      width={1440}
      height={1440}
      numFrames={241}
    />
  </main>
);

export default App;
