import './Style.css'
import Weater from './Weater'
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="weater">
      <Container maxWidth="sm" style={{backgroundColor:"blue" , height:"400px" , borderRadius:"10px" , boxShadow:"10px 5px 5px black"}}>
      <Weater/>
      </Container>
    </div>
  );
}

export default App;
