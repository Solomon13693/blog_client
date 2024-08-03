'use client'
import React from 'react'
import CountUp from 'react-countup';

function Counter({ value, currency }) {
    return (
        <CountUp start={0}
            end={value}
            prefix={currency}
            duration={2.75} />
    )
}

export default Counter