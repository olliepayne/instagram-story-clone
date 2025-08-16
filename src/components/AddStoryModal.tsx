import ModalWrapper from "./ModalWrapper"

interface AddStoryModal {
  isOpen: boolean
}

export default function AddStoryModal({ isOpen }: AddStoryModal) {
  return (
    <ModalWrapper isOpen={isOpen}>
      <div>
        
      </div>
    </ModalWrapper>
  )
}