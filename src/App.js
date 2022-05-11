import { StyledEngineProvider } from '@mui/styled-engine-sc';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyle from './commons/styles/global-style';
import Main from './containers/Main';

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline/>
      <GlobalStyle/>
      <Main />
    </StyledEngineProvider>    
  );
}
