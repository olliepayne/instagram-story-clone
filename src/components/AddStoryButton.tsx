interface AddStoryButtonProps {
  handleAddStoryModalVisibility: (isOpen: boolean) => void
}

export default function AddStoryButton({
  handleAddStoryModalVisibility
}: AddStoryButtonProps) {
  return (
    <button
      className="w-[89px] h-[89px] border-4 border-gray-900 rounded-[50%] bg-red-500 cursor-pointer"
      onClick={() => {
        handleAddStoryModalVisibility(true)
      }}
    >
      {/* open modal w/ inputs for story upload */}
      {/* Add accessibilty */}
    </button>
  )
}
