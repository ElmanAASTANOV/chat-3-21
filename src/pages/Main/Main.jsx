import Settings from "./Settings/Settings";

const Main = () => {
    return (<div id="main-layout">
        <div className="sidebar">
            Sidebar
        </div>
        <div className="pages">
            <Settings/>
        </div>
    </div>)
}

export default Main;