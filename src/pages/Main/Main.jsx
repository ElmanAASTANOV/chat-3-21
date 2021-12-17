import HomePage from "pages/Home-Page/index";

const Main = () => {
    return (<div id="main-layout">
        <div className="sidebar">
            Sidebar
        </div>
        <div className="pages">
            <HomePage />
        </div>
    </div>)
}

export default Main;