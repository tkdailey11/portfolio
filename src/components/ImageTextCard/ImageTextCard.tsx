import React from "react"
import "./ImageTextCard.css"
import familyPicture from "../../assets/family.png"

type ImageTextCardProps = {}

export default class ImageTextCard extends React.Component<ImageTextCardProps> {
    render() {
        return (
            <div className="card flex">
                <img src={familyPicture} />
                <div className="text-block flex-wrap">
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu vestibulum curabitur cubilia ultrices sagittis gravida blandit pretium. Blandit nostra nisl urna sapien; tortor eu odio. Viverra iaculis elementum cras nostra montes bibendum dui mattis. Habitasse maecenas turpis cras sem porttitor sodales. Risus dui pellentesque hac aliquam commodo sagittis ullamcorper id in. Felis lobortis aliquet proin scelerisque magna. Maecenas eleifend augue lectus phasellus curabitur curae augue maximus. Vivamus adipiscing tincidunt consequat faucibus interdum pellentesque facilisi.</p>
                    <p>Pulvinar tempus condimentum quam eros, ex nostra. Est augue taciti platea lectus sagittis ipsum nec phasellus. Nunc tristique blandit ullamcorper ullamcorper; sapien placerat suspendisse facilisis turpis. Facilisis nullam justo urna habitasse vestibulum. Cras rhoncus iaculis potenti leo fringilla. Pulvinar neque venenatis elementum pharetra neque ante ac class. Tempor eros litora; phasellus primis mollis nullam.</p>
                    <p>Id per at est torquent mollis massa. Nullam rhoncus ridiculus accumsan primis taciti varius. Molestie tincidunt vitae feugiat adipiscing quam nulla pellentesque est. Taciti condimentum etiam sodales at luctus proin fermentum a. Lacus nisl imperdiet penatibus nam hac amet nascetur. Natoque maximus habitant magna finibus pulvinar eleifend. Urna dapibus mollis cubilia praesent ante venenatis curabitur? Interdum pulvinar dis habitant lacus; efficitur dui. Mattis erat quisque consequat, natoque erat non per. Natoque facilisi sem sed suscipit consequat faucibus.</p>
                </div>
            </div>
        )
    } 
}