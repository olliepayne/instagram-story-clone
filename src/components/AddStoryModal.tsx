import { useState } from "react"

interface AddStoryModalProps {
  isOpen: boolean
  handleAddStoryModalVisibility: (isOpen: boolean) => void
}

export default function AddStoryModal({
  isOpen,
  handleAddStoryModalVisibility
}: AddStoryModalProps) {
  // state to hold file
  const [selectedImage, setSelectedImage] = useState<File | null>()
  function handleSetSelectedImage(event: React.ChangeEvent<HTMLInputElement>) {
    const fileList = event.target.files
    if (fileList) {
      const newSelectedImage = { ...fileList[0] }
      setSelectedImage(newSelectedImage)
    }
  }

  // function to upload the file to local storage

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
