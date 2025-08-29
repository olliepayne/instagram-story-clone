import { useState, useEffect } from "react"

export default function AddStoryButton() {
  const [modalOpen, setModalOpen] = useState(false)

  function handleModalOpen(open: boolean) {
    setModalOpen(open)
  }

  useEffect(() => {
    document.addEventListener("keydown", (keydown) => {
      if (keydown.key === "Escape") {
        handleModalOpen(false)
      }
    })
  })

  return (
    <>
      <button
        className="w-[89px] h-[89px] border-4 border-gray-900 rounded-[50%] bg-red-500 cursor-pointer"
        onClick={() => {
          handleModalOpen(true)
        }}
      >
        {/* open modal w/ inputs for story upload */}
        {/* Add accessibilty */}
      </button>
      {modalOpen && <AddStoryModal handleModalOpen={handleModalOpen} />}
    </>
  )
}

interface AddStoryModalProps {
  handleModalOpen: (open: boolean) => void
}

function AddStoryModal({ handleModalOpen }: AddStoryModalProps) {
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

  return (
    <div className="relative">
      <button
        className="absolute top-4 right-4"
        onClick={() => {
          handleModalOpen(false)
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
  )
}
