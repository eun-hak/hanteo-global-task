import './styles/reset.css';
import './styles/index.css';
import EmotionProvider from './provider/EmotionProvider';
import RouterProvider from './provider/RouterProvider';


const App = () => {
  return (
    <EmotionProvider>
      <RouterProvider/>
    </EmotionProvider>
  );
};

export default App;
