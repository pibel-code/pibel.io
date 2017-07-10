import React from 'react'

/**
 * Display component to show/hide content
 * @returns {*}
 * @constructor
 */
export default class Display extends React.Component {
    render() {
        return (this.props.if) ? <div>{this.props.children}</div> : null;
    }
}