import { IconType } from "react-icons"

export const getComponent = (iconsMap: Map<number, IconType>, id: string) => {
    const icon = (id: string) => iconsMap.get(parseInt(id))

    return icon ? icon(id) : null
}
