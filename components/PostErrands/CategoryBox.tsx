type categoryProps = {
  icon: string
  name: string
  onClick: any
  selectedItem: string
}

export default function CategoryBox({
  icon,
  name,
  selectedItem,
  onClick,
}: categoryProps) {
  return (
    <div
      onClick={onClick}
      className={`border-[1px] rounded-lg w-[210px] flex justify-center items-center py-8 mt-4 border-[#DCDCDC] cursor-pointer ${
        selectedItem === name && `bg-[#CBD5EC]`
      }`}
    >
      <div>
        <img src={icon} className=" w-[100px] h-[100px]" alt="" />
        <p className="pt-7 font-semibold">{name}</p>
      </div>
    </div>
  )
}
