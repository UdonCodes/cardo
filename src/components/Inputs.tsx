import { useState } from "react"


export enum SwitchState {
  False,
  None,
  True
}


export function Switch({ initialState, setState, labels }: {
  initialState: SwitchState,
  setState: (state: SwitchState) => void,
  labels: [string, string]
}) {
  
  const [displayState, setDisplayState] = useState<SwitchState>(initialState)

  const toggleSwitch = (value: SwitchState) => {
    setState(value)
    setDisplayState(value)
  }

  return (
    <div className="flex gap-2 items-center uppercase text-sm">
      <p>{labels[0]}</p>
      <div className="bg-primary-3 h-5 rounded-md overflow-hidden flex">
        <input type="radio" name="toggle" checked={displayState === SwitchState.False} onChange={() => toggleSwitch(SwitchState.False)}
          className="w-5 h-full appearance-none checked:bg-blue-500" />
        <input type="radio" name="toggle" checked={displayState === SwitchState.None} onChange={() => toggleSwitch(SwitchState.None)}
          className="w-5 h-full appearance-none checked:bg-primary-4" />
        <input type="radio" name="toggle" checked={displayState === SwitchState.True} onChange={() => toggleSwitch(SwitchState.True)}
          className="w-5 h-full appearance-none checked:bg-green-500" />
      </div>
      <p>{labels[1]}</p>
    </div>
  )
}

export function Checkbox({ onChange, defaultChecked = false }: { onChange: (value: boolean) => void, defaultChecked?: boolean }) {


  return (
    <div className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="hidden peer"
        defaultChecked={defaultChecked}
        onChange={(e) => {
          onChange(Boolean(e.target.checked))
        }}
      />
      <span className="text-transparent peer-checked:text-primary-9 text-lg font-bold flex justify-center items-center h-5 w-5 text-center bg-primary-2 transition duration-100 ease-in-out rounded-md m-1">
        ✓
      </span>
    </div>
  )
}
