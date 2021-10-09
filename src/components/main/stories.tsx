import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title default',
    description: 'Description default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'React Avançado',
  description: 'Typescript, ReactJS, NextJS e Styled Components'
}

export const Default: Story = (args) => <Main {...args} />
Default.args = {
  title: 'Qualquer coisa',
  description: 'Pode ser interpretado'
}
