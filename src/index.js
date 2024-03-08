import { createRoot } from 'react-dom/client';
import App from './App';
import { CookiesProvider } from 'react-cookie';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<>
   <CookiesProvider>
      <App />
    </CookiesProvider>
</>);