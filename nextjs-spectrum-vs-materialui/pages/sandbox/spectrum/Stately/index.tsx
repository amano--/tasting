import { SSRProvider, Provider, defaultTheme, Button } from '@adobe/react-spectrum'

import { MyRadioGroup } from './MyRadioGroup'

export default function App() {
  return (
    <Provider theme={defaultTheme}>
      <MyRadioGroup defaultValue="dogs" onChange={(value) => alert(`Selected ${value}`)} />
    </Provider>
  )
}
