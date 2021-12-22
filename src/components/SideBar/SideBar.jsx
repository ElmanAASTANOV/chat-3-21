const SideBar = ({ menus =[], onChangeMenu = () =>{}}) => {
    return (<aside className="side-bar">
        <header>
          
        </header>

        <ul>
            {
                menus?.map((menu) => {
                    return (
                        <li key = {menu.key} onClick={() =>{
                            if(onChangeMenu) onChangeMenu(menu.key)
                        }}>
                            
                           {menu.icon}

                        </li>

                    )
                })

            }
        </ul>
    </aside>)
}
export default SideBar;