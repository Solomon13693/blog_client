import React from 'react'

const Tabs = ({ tabs, active, setActive }) => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex bg-gray-100 rounded-lg transition p-1 w-[90%] md:w-[60%]">
                <nav className="flex text-center space-x-1 w-full">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`${tab.value == active
                                ? 'bg-white'
                                : 'bg-transparent'
                                } tracking-tight text-gray-700 py-1 w-full rounded-lg font-medium transition-all`}
                            onClick={() => setActive(tab.value)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>
        </div>

    )
}

export default Tabs