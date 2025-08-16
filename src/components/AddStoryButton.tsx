interface AddStoryButton {
  handleAddStoryModalVisibility: (show: boolean) => void
}

export default function AddStoryButton({ handleAddStoryModalVisibility }: AddStoryButton) {
  function closeAddStoryModal() {
    handleAddStoryModalVisibility(true)
  }

  return (
    <button
      className="w-[89px] h-[89px] border-4 border-gray-900 rounded-[50%] bg-red-500 cursor-pointer"
      onClick={closeAddStoryModal}
    >
      {/* open modal w/ inputs for story upload */}
      {/* Add accessibilty */}
    </button>
  )
}
