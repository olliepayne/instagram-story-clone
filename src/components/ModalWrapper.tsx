interface ModalWrapper {
  children?: React.ReactNode | React.ReactNode[]
  isOpen: boolean
}

export default function ModalWrapper({ children, isOpen }: ModalWrapper) {
  return isOpen ? (
    <div className="rounded-3xl bg-gray-800 w-fit p-5 text-white">
      {children}
    </div>
  ) : (
    <></>
  )
}
