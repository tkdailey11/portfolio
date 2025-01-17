import React from 'react'
import TextColumnCard from '../../components/TextColumnCard/TextColumnCard'
import './portfolio.css'

export default class Portfolio extends React.Component {
    currLeft = <h2 style={{ padding: '16px' }}>Current Interests</h2>
    currRight = <div className="text-block flex-wrap">
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu vestibulum curabitur cubilia ultrices sagittis gravida blandit pretium. Blandit nostra nisl urna sapien; tortor eu odio. Viverra iaculis elementum cras nostra montes bibendum dui mattis. Habitasse maecenas turpis cras sem porttitor sodales. Risus dui pellentesque hac aliquam commodo sagittis ullamcorper id in. Felis lobortis aliquet proin scelerisque magna. Maecenas eleifend augue lectus phasellus curabitur curae augue maximus. Vivamus adipiscing tincidunt consequat faucibus interdum pellentesque facilisi.</p>
        <p>Pulvinar tempus condimentum quam eros, ex nostra. Est augue taciti platea lectus sagittis ipsum nec phasellus. Nunc tristique blandit ullamcorper ullamcorper; sapien placerat suspendisse facilisis turpis. Facilisis nullam justo urna habitasse vestibulum. Cras rhoncus iaculis potenti leo fringilla. Pulvinar neque venenatis elementum pharetra neque ante ac class. Tempor eros litora; phasellus primis mollis nullam.</p>
        <p>Id per at est torquent mollis massa. Nullam rhoncus ridiculus accumsan primis taciti varius. Molestie tincidunt vitae feugiat adipiscing quam nulla pellentesque est. Taciti condimentum etiam sodales at luctus proin fermentum a. Lacus nisl imperdiet penatibus nam hac amet nascetur. Natoque maximus habitant magna finibus pulvinar eleifend. Urna dapibus mollis cubilia praesent ante venenatis curabitur? Interdum pulvinar dis habitant lacus; efficitur dui. Mattis erat quisque consequat, natoque erat non per. Natoque facilisi sem sed suscipit consequat faucibus.</p>
    </div>

    daneLeft = <h3 style={{paddingLeft: "16px"}}>Dane Earthworks</h3>
    daneRight = <div className="text-block flex-wrap" style={{padding: "16px"}}>Content</div>

    artLeft = <h3 style={{paddingLeft: "16px"}}>Aysia Art</h3>
    artRight = <div className="text-block flex-wrap" style={{padding: "16px"}}>Content</div>

    render() {
        return (
            <div className="flex">
                <TextColumnCard leftComponent={this.currLeft} rightComponent={this.currRight} />
                
                <h2>Past Projects</h2>

                <TextColumnCard leftComponent={this.daneLeft} rightComponent={this.daneRight} />

                <TextColumnCard leftComponent={this.artLeft} rightComponent={this.artRight} />
            </div>
        )
    }
}