import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import ChatWrap from "../ChatWrap";

const Layout = (state) => {
    const [loader, setLoader] = useState(true)
    //console.log('state', state)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 500)
    }, [])

    return (
        <div className={'layout'}>
            {loader ?
                <img
                    src={'https://imgur.com/QxsxVEc.gif'}
                    alt={'loader'}
                    className={'image'}

                />
                    :
                <ChatWrap />
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)