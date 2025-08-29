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
        className="w-[89px] h-[89px] border-4 border-gray-900 rounded-[50%] bg-red-500 cursor-pointer text-transparent"
        onClick={() => {
          handleModalOpen(true)
        }}
      >
        Add to your
      </button>
      {modalOpen && <Modal handleModalOpen={handleModalOpen} />}
    </>
  )
}

interface ModalProps {
  handleModalOpen: (open: boolean) => void
}

function Modal({ handleModalOpen }: ModalProps) {
  const [selectedImage, setSelectedImage] = useState<File | null>()
  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const fileList = event.target.files
    if (fileList && fileList.length > 0) {
      const imageFile = fileList[0]
      function handleImageStorage() {
        const reader = new FileReader()

        reader.onload = (event) => {
          if (event.target) {
            const imageDataURL = event.target.result as string
            localStorage.setItem("story", imageDataURL)
          }
        }

        reader.readAsDataURL(imageFile)
      }
      handleImageStorage()

      // setSelectedImage(fileList[0])
    }
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
          accept="image/png, image/jpeg"
          onChange={handleImageUpload}
        />
      </div>
    </div>
  )
}
