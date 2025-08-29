import { useState } from "react"

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

interface AddStoryModalProps {
  isOpen: boolean
  handleAddStoryModalVisibility: (isOpen: boolean) => void
}

function AddStoryModal({
  isOpen,
  handleAddStoryModalVisibility
}: AddStoryModalProps) {
  // state to hold file
  const [selectedImage, setSelectedImage] = useState<File | null>()
  function handleSetSelectedImage(event: React.ChangeEvent<HTMLInputElement>) {
    const fileList = event.target.files
    if (fileList) {
      setSelectedImage(fileList[0])
    }
  }

  // function to upload the file to local storage
  function handleSelectedImageUpload() {
    // upload the image to a feed array in local storage, which is an array of storyobjects
    // story class will contain properties for image and user
  }

  return isOpen ? (
    <div className="relative">
      <button
        className="absolute top-4 right-4"
        onClick={() => {
          handleAddStoryModalVisibility(false)
        }}
      >
        X
      </button>
      <div className="absolute top-1/2 left-1/2 rounded-3xl bg-[#171717] w-fit p-5 text-white">
        <p>Select an image</p>
        <p>Current file: {selectedImage?.name}</p>
        <input
          type="file"
          accept="img/png, img/jpeg"
          onChange={handleSetSelectedImage}
        />
      </div>
    </div>
  ) : (
    <></>
  )
}
