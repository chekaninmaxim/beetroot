import React, { Component } from 'react'

export default Component =>
    class showIfVisible extends React.Component {

        render() {
            return this.props.visible ? <Component {...this.props} /> : null;
        }
    }
