import Header from './components/Header';
import SideMenu from './components/SideMenu.jsx';
import Container from './components/Container.jsx';
export default function App() {
  return (
      <>
          <Header />
          <div className="container-lg py-4">
              <div className="row justify-content-center">
                  <div className="col-12 col-xl-10">
                      <div className="row g-4">
                          <div className="col-12 col-md-4 col-lg-3">
                              <SideMenu />
                          </div>
                          <div className="col-12 col-md-8 col-lg-9">
                              <Container />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

