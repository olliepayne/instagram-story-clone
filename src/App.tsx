import AddStoryButton from "./components/AddStoryButton"
import { useEffect, useState } from "react"

function App() {
  const [addStoryModalIsOpen, setAddStoryModalIsOpen] = useState(false)
  useEffect(() => {
    document.addEventListener("keydown", (keydown) => {
      if (keydown.key === "Escape") {
        handleAddStoryModalVisibility(false)
      }
    })
  })

  function handleAddStoryModalVisibility(isOpen: boolean) {
    setAddStoryModalIsOpen(isOpen)
  }

  return (
    <div className="py-4 px-4">
      <AddStoryButton
        handleAddStoryModalVisibility={handleAddStoryModalVisibility}
      />
    </div>
  )
}

export default App
