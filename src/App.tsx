import { useLocation } from "react-router-dom";
import Path from "@/utils/path/routes";
import { useLayoutEffect, useState } from "react";
import SideNaviBar from "@/components/common/SideNaviBar";
import ProtectedRoutes from "@components/routes/ProtectedRoutes";
import UnauthenticatedRoutes from "@components/routes/UnauthenticatedRoutes";
import GNB from "./components/common/GNB";

function App() {
  const location = useLocation();
  const { HOME } = Path;

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

  useLayoutEffect(() => {
    const pathname =
      location.pathname.endsWith("/") && location.pathname.length > 1
        ? location.pathname.slice(0, -1)
        : location.pathname;

    const hasSideNav = [HOME].includes(pathname);

    setHasSideNav(hasSideNav);
  }, []);

  return (
    <main className="w-full h-full min-h-screen">
      <div className="w-full max-w-screen h-full flex flex-row">
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
          className={`flex flex-col h-full min-h-screen ${
            hasSideNav ? "!w-[calc(100% - 18rem)]" : "!w-full"
          }`}
        >
          {/* 헤더 */}
          <header className={"w-full h-14 bg-white border-b-2 shadow-xl"}>
            <GNB hasSideNav={hasSideNav} setHasSideNav={setHasSideNav} />
          </header>
          {/* 컨테이너 */}
          <section className="w-full flex flex-1 justify-center items-center p-4 bg-gray-100">
            {RoutesComponent}
          </section>
        </section>
        {/* <footer></footer> */}
      </div>
    </main>
  );
}

export default App;
