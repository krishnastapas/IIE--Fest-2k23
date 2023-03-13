import { SideBar } from './type'
import { useStore } from '../../utils/Store'
import { StoreInterface } from '../global/type';
export default function SidebarItem(props: {
    SidebarItem: SideBar,
    index: number,
    getButtonValue: any,
    setButtonValue: any
}) {
    const [getStore, setStore] = useStore();

    const onClickItem=()=>{
        let store:StoreInterface=getStore()as StoreInterface
        store.currentProblemNumber=props.index
        setStore(store)

        props.setButtonValue(props.index)
    }

    return (<li onClick={onClickItem}>
        <a href="#" className={
            props.index === props.getButtonValue()
                ? "nav-link active" : "nav-link link-dark"}>
            <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#speedometer2" />
            </svg>
            {props.SidebarItem.name}
        </a>
    </li>)
}