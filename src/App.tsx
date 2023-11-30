import './App.css';
import { Observer } from './homework/1';

const testFunction = () => {
  console.log('test')
};


export const App = () => {
  return (
    <Observer children={<div>abc</div>} onContentEndVisible={testFunction} />
  );
}

export default App;
