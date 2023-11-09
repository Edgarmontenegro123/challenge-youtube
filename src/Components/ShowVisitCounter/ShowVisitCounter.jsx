import {useEffect, useState} from "react";
import {visitCounter} from "../../Functions/Functions.jsx";
import './ShowVisitCounter.scss'

const ShowVisitCounter =  () => {
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const count = await visitCounter()
            setVisitCount(count)
        }
        fetchData()
    }, []);

    return (
        <>
            <button className='visitor' disabled={true}>Visitor {visitCount}</button>
        </>
    );
}
export default ShowVisitCounter


