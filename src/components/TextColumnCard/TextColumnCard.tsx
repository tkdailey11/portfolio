import React from "react"
import "./TextColumnCard.css"

type TextColumnCardProps = {
    leftComponent: React.ReactNode
    rightComponent: React.ReactNode
}

export default class TextColumnCard extends React.Component<React.PropsWithChildren<TextColumnCardProps>> {
    render() {
        return (
            <div className="card flex">
                {this.props.leftComponent}
                {this.props.rightComponent}
            </div>
        )
    } 
}