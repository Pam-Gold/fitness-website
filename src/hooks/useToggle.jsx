import { useState } from "react"

const useToggle = () => {

  const [toggle, setToggle] = useState(false);

  const toggleAction = () => {
    setToggle(prevToggle=>!prevToggle);
  }

  return[toggle, toggleAction];

}

export default useToggle;