import { Route, Routes } from "react-router-dom";
import routerList from './router'
import ShopLayout from "./layout/shopLayout";

function App() {
  return (
    <div>
      <Routes>
        {routerList.map((router, index) => {
          if (router.path) {
            return <Route key={index} exact path={router.path} element={<ShopLayout>{router.element}</ShopLayout>}>
            </Route>
          }
        })
        }
      </Routes>
    </div>
  );
}

export default App;
