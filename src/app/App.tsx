import './styles/reset.css';
import './styles/index.css';
import EmotionProvider from './provider/EmotionProvider';
import { MswProvider } from './provider/MswProvider';
import ReactQueryProvider from './provider/ReactQueryProvider';
import RouterProvider from './provider/RouterProvider';


const App = () => {
  return (
    <MswProvider>
      <ReactQueryProvider>
        <EmotionProvider>
          <RouterProvider />
        </EmotionProvider>
      </ReactQueryProvider>
    </MswProvider>
  );
};

export default App;
