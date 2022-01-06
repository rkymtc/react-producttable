import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>

        <nav>
          <h1><img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="display image" width={250} height={150}/></h1>
        </nav>
      </div>
      <hr></hr>
      <div>
        <Outlet></Outlet>
      </div>
      <hr></hr>
      <div>
        Site Footer
      </div>
    </>
  );
}

export default App;