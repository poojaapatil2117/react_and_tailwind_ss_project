
import { ProductDetail } from "./pages/product/ProductDetail";
import { Home, Layout } from "./routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          < Route
            path="/"
            element=
            {
              <Layout>
                <Home />
              </Layout>
            }
          />

          < Route
            path="/details"
            element=
            {
              <Layout>
                <ProductDetail/>
              </Layout>
            }
          />

        </Routes>
      </BrowserRouter>

      {/* <Home/> */}
    </>
  )
}

export default App
