import MainNavigation from "../components/MainNavigation";
import {Outlet, useNavigate} from "react-router-dom";

const HomeRootLayout = () => {
    const navigation = useNavigate();

    return (
        <>
            <MainNavigation/>
            <main>
                {/*using useNavigate to consider loading status*/}
                {/*{navigation.state === 'loading' && <p>Loading...</p>}*/}
                <Outlet/>
            </main>
        </>
    )
};

export default HomeRootLayout;