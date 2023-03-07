import { CategoryProps, taskLists } from '../../helpers/lists'
import CategoryBox from './CategoryBox'

type CategoryProp = {
  selectedItem: string
  setSelectedItem: any
}
export default function Category({
  selectedItem,
  setSelectedItem,
}: CategoryProp) {
  return (
    <div>
      <p className="font-semibold text-[18px]">Tasks</p>
      <div className="flex flex-wrap gap-20">
        {taskLists.slice(0, 5).map((item: CategoryProps, index: number) => (
          <CategoryBox
            icon={item.icon}
            name={item.name}
            selectedItem={selectedItem}
            onClick={() => {
              setSelectedItem(item.name)
            }}
          />
        ))}
      </div>
      <p className="font-semibold text-[18px] pt-10">Services</p>
      <div className="flex flex-wrap flex-grow gap-20">
        {taskLists.slice(5).map((item: CategoryProps, index: number) => (
          <CategoryBox
            selectedItem={selectedItem}
            icon={item.icon}
            name={item.name}
            onClick={() => {
              setSelectedItem(item.name)
            }}
          />
        ))}
      </div>
    </div>
  )
}
