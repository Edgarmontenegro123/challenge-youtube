import {useEffect, useState} from "react";
import {getVisitCounter} from "../../Functions/Functions.jsx";
import './ShowVisitCounter.scss'

const ShowVisitCounter =  () => {
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const count = await getVisitCounter()
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


