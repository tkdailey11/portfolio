import React from "react"
import "./ImageTextCard.css"

type ImageTextCardProps = {
    className: String;
}

export default class ImageTextCard extends React.Component<ImageTextCardProps> {
    render() {
        return (
            <div className={"card " + this.props.className}>
            </div>
        )
    } 
}