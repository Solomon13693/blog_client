import React from 'react'
import poststatus from '@/json/poststatus'
import { EachElement } from '@/utils/Each';

const PostStatus = () => {


    const badgeColor = [
        { background: '#1D2329', inner: '#FF3333', text: 'text-white', innerColor: 'text-white' },
        { background: '#35C332', inner: '#FFF', text: 'text-black', innerColor: 'text-white' },
        // { background: '#0000FF', inner: '#FFF', text: 'text-black', innerColor: 'text-white' },

        // { background: '#808080', inner: '#FFF', text: 'text-black', innerColor: 'text-white' },
        { background: '#766060', inner: '#FFF', text: 'text-black', innerColor: 'text-white' },
        { background: '#FFFF00', inner: '#FFF', text: 'text-black', innerColor: 'text-black' },
        { background: '#FF0000', inner: '#FFF', text: 'text-black', innerColor: 'text-white' }
    ];


    return (
        <div className="flex items-center gap-2 flex-wrap">

            <EachElement of={poststatus} render={(item, index) => {

                const colorIndex = index % badgeColor.length;
                const bg = badgeColor[colorIndex].background;
                const inner = badgeColor[colorIndex].inner;
                const text = badgeColor[colorIndex].text;
                const innerColor = badgeColor[colorIndex].innerColor;

                return (
                    <div style={{ background: bg }} className={`flex items-center gap-x-2 text-xs font-medium px-2.5 py-1 rounded-full ${innerColor}`}> {item.label} 
                    <div style={{ background: inner }} className={`flex items-center justify-center h-4 rounded-full px-2 text-[9px] ${text} `}> {item.count} </div></div>
                )
            }} />

        </div>
    )
}

export default PostStatus