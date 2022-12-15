import dynamic from 'next/dynamic'
import React from 'react'
const DisabledSSR = props => ( 

    <React.Fragment>{props.children}</React.Fragment> 
) 
export default dynamic(() => Promise.resolve(DisabledSSR), { 
    ssr: false 
})