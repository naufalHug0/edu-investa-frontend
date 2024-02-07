import React from 'react'

const QuestionLoader = () => {
    return (
        <>
        <div className="py-[26px] border-b border-[rgba(255,255,255,.5)] flex items-center justify-between mt-6">
            <div className="bg-[rgba(255,255,255,.3)] rounded-xl w-20 h-10 animate-pulse"></div>
            <div className="py-2 px-3 bg-gradient-to-l gradient-green flex items-center gap-[6px] rounded-md">
                <p className="font-bold text-white text-xl">-</p>
            </div>
        </div>
        <div className="mt-4 rounded-xl bg-[rgba(0,0,0,.2)] px-6 py-7 overflow-y-scroll max-h-[30vh]">
            <h1 className="font-bold text-white text-2xl">
                <div className="bg-[rgba(255,255,255,.2)] rounded-full w-full h-4 animate-pulse"></div>
                <div className="bg-[rgba(255,255,255,.2)] mt-3 rounded-full w-[80%] h-4 animate-pulse"></div>
                <div className="bg-[rgba(255,255,255,.2)] mt-3 rounded-full w-[60%] h-4 animate-pulse"></div>
            </h1>
        </div>
        <div className="mt-8 w-full grid grid-rows-4 gap-4 select-none">
            {
                [...Array(4)].map((_,i) => <div key={i} className={`option-bg animate-pulse rounded-3xl border-2 px-6 h-[68px] transition`}></div>)
            }
        </div>
        </>
    )
}

export default QuestionLoader