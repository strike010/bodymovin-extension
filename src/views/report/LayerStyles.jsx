import React from 'react'
import {
  getStylesMessageCount,
} from '../../helpers/reports/counter'
import RowContainer from './components/RowContainer'
import Message from './components/Message'
import StrokeStyle from './styles/StrokeStyle'
import DropShadowStyle from './styles/DropShadowStyle'
import InnerShadowStyle from './styles/InnerShadowStyle'
import OuterGlowStyle from './styles/OuterGlowStyle'

class LayerStyles extends React.Component {

  builders = {
    0: StrokeStyle,
    1: DropShadowStyle,
    2: InnerShadowStyle,
    3: OuterGlowStyle,
  }

  buildStylesCollection = (shouldAutoExpand, styles) => {
    return styles.map(
      style => {
        var Component = this.builders[style.type];
        return <Component
          key={style.type}
          style={style}
          renderers={this.props.renderers}
          messageTypes={this.props.messageTypes}
          shouldAutoExpand={this.props.shouldAutoExpand}
        />
      }
    )
  }

  buildContent = shouldAutoExpand => {
    return [
      this.buildStylesCollection(shouldAutoExpand, this.props.styles.styles)
    ]
  }

  render() {
    const messageCount = getStylesMessageCount(this.props.styles, this.props.renderers, this.props.messageTypes)
    return (
      <RowContainer
        name={'Layer Styles'}
        content={this.buildContent}
        messageCount={messageCount}
        shouldAutoExpand={this.props.shouldAutoExpand}
      />
    );
  }
}

export default LayerStyles