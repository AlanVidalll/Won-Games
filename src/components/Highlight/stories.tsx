import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: `read dead it's back`,
    subTitle: `Come see Jonh's new adventure`,
    backgroundImage: '/img/red-dead-background.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
} as Meta

export const Basic: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)
export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
