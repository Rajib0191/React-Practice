import BioData from './components/BioData';


let skills = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'];
let skills1 = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'python', 'Django'];

function App() {
  return (
    <div>
      <BioData
        name="Md. Azizul Islam Rajib"
        gmail="rajib@gmail.com"
        mobile="+880 1234567"
        skills={skills}
      />
      <hr />
      <hr />
      <BioData
        name="Md. XYZ"
        gmail="abc@gmail.com"
        mobile="+880 1234567"
        skills={skills1}
      />
    </div>
  );
}
export default App;
