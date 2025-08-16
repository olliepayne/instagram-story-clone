import AddStoryButton from "./components/AddStoryButton"
import AddStoryModal from "./components/AddStoryModal"
import { useState } from "react"

function App() {
  const [addStoryModalIsOpen, setAddStoryModalIsOpen] = useState(false)
  function handleAddStoryModalVisibility(show: boolean) {
    if (show) {
      document.addEventListener("keydown", (keydown) => {
        if (keydown.key === "Escape") {
          handleAddStoryModalVisibility(false)
        }
      })
    }
    setAddStoryModalIsOpen(show)
  }

  return (
    <div className="py-4 px-4">
      <AddStoryButton
        handleAddStoryModalVisibility={handleAddStoryModalVisibility}
      />
      <AddStoryModal isOpen={addStoryModalIsOpen} />
    </div>
  )
}

export default App
