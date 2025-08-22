interface AddStoryModalProps {
  isOpen: boolean
  handleAddStoryModalVisibility: (isOpen: boolean) => void
}

export default function AddStoryModal({
  isOpen,
  handleAddStoryModalVisibility
}: AddStoryModalProps) {
  return isOpen ? (
    <div className="rounded-3xl bg-gray-800 w-fit p-5 text-white">
      <button
        onClick={() => {
          handleAddStoryModalVisibility(false)
        }}
      >
        Close
      </button>
    </div>
  ) : (
    <></>
  )
}
