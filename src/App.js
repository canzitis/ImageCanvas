import './App.css';
import ImageCanvas from './imageCanvas'

const App = () => (
    <ImageCanvas
      scrollHeight={3500}
      width={1440}
      height={1440}
      numFrames={240}
    />
);

export default App;
