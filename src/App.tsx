import { useLocation } from "react-router-dom";
import Path from "@/utils/path/routes";
import { useLayoutEffect, useState } from "react";
import SideNaviBar from "@/components/common/SideNaviBar";
import ProtectedRoutes from "@components/routes/ProtectedRoutes";
import UnauthenticatedRoutes from "@components/routes/UnauthenticatedRoutes";
import GNB from "./components/common/GNB";

function App() {
  const location = useLocation();

  const [hasSideNav, setHasSideNav] = useState<boolean>(false);

  const [RoutesComponent, setRoutesComponent] =
    useState<React.ReactElement | null>(null);

  // const authToken = token.getToken("token");
  const [isLogin, setIsLogin] = useState<boolean>(true);

  useLayoutEffect(() => {
    // const authToken = token.getToken("token");
    // console.log(authToken);
    isLogin && setRoutesComponent(<ProtectedRoutes />);
    !isLogin && setRoutesComponent(<UnauthenticatedRoutes />);
  }, [isLogin]);

  return (
    <main className="w-full h-full min-h-screen">
      <div className="w-full min-w-full h-full flex flex-row">
        {/* 사이드 */}
        <aside
          className={`w-72 min-h-screen bg-primary duration-300 whitespace-nowrap ${
            hasSideNav ? "!w-72" : "!w-0"
          }`}
        >
          <SideNaviBar />
        </aside>

        {/* 메인 */}
        <section
          className={`w-[calc(100%-18rem)] flex flex-1 flex-col h-full min-h-screen ${
            hasSideNav ? "" : ""
          }`}
        >
          {/* 헤더 */}
          <header
            className={`w-full h-14 bg-white border-b-2 shadow-xl ${
              hasSideNav ? "w-[calc(100% - 18rem)]" : "!w-full"
            }`}
          >
            <GNB hasSideNav={hasSideNav} setHasSideNav={setHasSideNav} />
          </header>
          {/* 컨테이너 */}
          <section className="w-full flex flex-1 justify-center items-start p-4 bg-gray-100">
            {RoutesComponent}
          </section>
        </section>
        {/* <footer></footer> */}
      </div>
    </main>
  );
}

export default App;
