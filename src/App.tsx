import './App.css';
import { Observer } from './homework/1';
import { RequestComponent } from './homework/2';
import { FormComponent } from './homework/3';
import { ComponentApp } from './homework/4';

const testFunction = () => {
  console.log('test')
};


export const App = () => {
  return (
    <>
      <Observer children={<div>abc</div>} onContentEndVisible={testFunction} />
      <RequestComponent />
      <FormComponent />
      <ComponentApp />
    </>
  );
}

export default App;
