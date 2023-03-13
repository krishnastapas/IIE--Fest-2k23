import { useEffect, useState } from 'react'
import { getAppData as fetchAppData } from './repository'
import SidebarItem from './SidebarItem'
import './sidebars.css'
import './sidebars.js'
import { SideBar } from './type'
export default function Main() {
    const [sidebarItems, setSidebarItems] = useState<SideBar[]>([])
    const [activeButton, setActiveButton] = useState(0);

    function getSidebarData() { fetchAppData() }
    useEffect(() => {

        return () => {
            // getSidebarData()
            let appData = fetchAppData()

            setSidebarItems(appData.sidebarItems)
        }
    }, [])

    function getButtonValue() { return activeButton }
    function setButtonValue(value: number) { setActiveButton(value) }
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '280px' }}>
            <a href="https://getbootstrap.com/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg className="bi me-2" width={40} height={32}>
                    <use xlinkHref="#bootstrap" />
                </svg>
                <span className="fs-4">HEREE</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                {sidebarItems.map((e, i) => <SidebarItem key={i} index={i} getButtonValue={getButtonValue} setButtonValue={setButtonValue} SidebarItem={e} />)}
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width={32} height={32} className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    )
}