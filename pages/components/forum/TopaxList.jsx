import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadChannels } from '../../../reducers/channelsReducer';
import { loadTopics } from '../../../reducers/topicsReducer';
import NavButtons from './NavButtons'

const TopaxList = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(loadChannels)
        //dispatch(loadTopics)
    },[dispatch])

    const channels = useSelector((state)=> state.channels)
    const activeChannelId = useSelector((state) => state.channels.active);

    //const topics = useSelector((state)=> state.topics)
    //const activeTopicId = useSelector((state) => state.topics.active);
    console.log(channels)

  return (
    <div className='md:mx-4'>
        <NavButtons/>
        <div className=" table w-full border border-zinc-500 rounded-sm">
            <div className="table-header-group text-zinc-100 text-lg font-bold">
                <div className="table-row">
                    <div className="table-cell text-left p-2">Topax</div>
                    <div className="table-cell text-left p-2">Auteur</div>
                    <div className="table-cell text-left p-2">Nb</div>
                    <div className="table-cell text-left p-2">Dernier msg</div>
                </div>
            </div>
            <div className="table-row-group text-zinc-100">
                <div className="table-row bg-zinc-700">
                    <div className="table-cell p-2">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
                    <div className="table-cell p-2">Malcolm Lockyer</div>
                    <div className="table-cell p-2">1961</div>
                    <div className="table-cell p-2">1961</div>
                </div>
                <div className="table-row">
                    <div className="table-cell p-2">Witchy Woman</div>
                    <div className="table-cell p-2">The Eagles</div>
                    <div className="table-cell p-2">1972</div>
                    <div className="table-cell p-2">1972</div>
                </div>
                <div className="table-row bg-zinc-700">
                    <div className="table-cell p-2">Shining Star</div>
                    <div className="table-cell p-2">Earth, Wind, and Fire</div>
                    <div className="table-cell p-2">1975</div>
                    <div className="table-cell p-2">1975</div>
                </div>
            </div>
        </div>
        <NavButtons/>
    </div>
  )
}

export default TopaxList