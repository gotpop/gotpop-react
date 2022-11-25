type Props = {
    componentsMap: Map<number, any>;
    id: string;
};

export const getImage = (imagesMap: Map<number, string>, id: string) => {
    const image = imagesMap.get(parseInt(id))

    return image ? image : null
}

export const GetComponent = ({ componentsMap, id }: Props) => {
    const gotComponent = (id: string) => componentsMap.get(parseInt(id))
    const resolvedComponent = gotComponent(id)

    return resolvedComponent()
}
