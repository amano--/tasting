import { useRadioGroupState } from '@react-stately/radio'

export function MyRadioGroup(props) {
  let state = useRadioGroupState(props)

  return (
    <>
      <label>
        <input
          type="radio"
          name={state.name}
          checked={state.selectedValue === 'dogs'}
          onChange={() => state.setSelectedValue('dogs')}
        />
        Dogs
      </label>
      <label>
        <input
          type="radio"
          name={state.name}
          checked={state.selectedValue === 'cats'}
          onChange={() => state.setSelectedValue('cats')}
        />
        Cats
      </label>
    </>
  )
}
