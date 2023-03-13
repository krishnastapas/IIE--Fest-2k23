import { useEffect, useState } from 'react';
import { useStore } from '../../utils/Store';
import { StoreInterface } from '../global/type';
import SidebarPresenter from './../sidebar/Presenter';
import { getAppData as fetchAppData } from '../sidebar/repository'
import { createOtherDocs } from './repository'
import { SideBar } from '../sidebar/type';

export default function Main() {

    const [getStore, setStore, subscribe, unsubscribe] = useStore();
    const [getStoreData, setStoreData] = useState<StoreInterface>({ currentProblemNumber: 0, sidebarItems: [{ name: "", code: "", message: { error: "" }, problem: "", result: { answer: "", status: false } }] })
    const [sidebarItems, setSidebarItems] = useState<SideBar[]>([{ name: "", code: "", message: { error: "" }, problem: "", result: { answer: "", status: false } }])

    // useEffect(() => {

    //     subscribe(FetchStoreData);
    //     return () => {
    //         let appData = fetchAppData()

    //         setSidebarItems(appData.sidebarItems)
    //         unsubscribe(FetchStoreData);
    //         // setStoreData({ currentProblemNumber: 0 })
    //     }

    // }, [])

    function FetchStoreData() {
        let appData = fetchAppData()
        let data = getStore()

        setStoreData(data)
    }
    function onClickMarkComplete() {
        console.log("fhdfg");   // Only Dev
    }

    return (
        <main>
            {/* <SidebarPresenter /> */}
            <div className="b-example-divider"></div>

            <IDE
                getStoreData={getStoreData}
                sidebarItems={sidebarItems}
                onClickMarkComplete={onClickMarkComplete}
            />
        </main>
    )
}

function IDE(props: {
    getStoreData: StoreInterface,
    sidebarItems: SideBar[]
    , onClickMarkComplete: any
}) {
    const [command, setCommand] = useState('')

    const onChangeHandlerCommand = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCommand(value);
    };

    const onClickCheckOut = () => {
        let pattern = "node server.js"
        console.log("command: " + command);   // Only Dev
        console.log("pattern: " + pattern);   // Only Dev
        console.log(matchSegment(pattern, command));   // Only Dev

        createOtherDocs({name: command})

    };

    function matchSegment(patternString: string, commandString: string): boolean {

        let pattern: string[] = cleanSegment(patternString)
        let command: string[] = cleanSegment(commandString)
        console.log(command);   // Only Dev

        let isMatch = false
        for (let index = 0; index < pattern.length; index++) {
            const element = pattern[index];
            if (pattern[index] !== command[index]) {
                isMatch = false
                break
            } else {
                isMatch = true
            }
        }
        return isMatch
    }

    function cleanSegment(command: string): string[] {
        let segment = []

        let commandSegment = command.split(" ")

        for (let index = 0; index < commandSegment.length; index++) {
            if (commandSegment[index].length)
                segment.push(commandSegment[index])
        }

        return segment
    }

    return (
        <div className="flex-shrink-0 p-3 bg-white overflow-auto">
            step 1
            {/* {props.getStoreData.currentProblemNumber} */}
            <br />
            <br />
            {/* {props.sidebarItems[props.getStoreData.currentProblemNumber].problem} */}
            Problem:
            <br />
            <p style={{ maxWidth: "30%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dicta. Rem corrupti, autem cum obcaecati, quod repellendus, tempore recusandae atque at similique magnam maxime laboriosam architecto illo ut impedit iure.
            </p>
            Solution:
            <br />
            <p style={{ maxWidth: "30%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dicta. Rem corrupti, autem cum obcaecati, quod repellendus, tempore recusandae atque at similique magnam maxime laboriosam architecto illo ut impedit iure.
            </p>
            <input type="text" value={command} onChange={onChangeHandlerCommand} />

            <br />
            <button className='btn btn-success' onClick={onClickCheckOut}>Check Out</button>
            {/* <button onClick={props.onClickMarkComplete} >mark complete</button> */}
        </div>
    )
}