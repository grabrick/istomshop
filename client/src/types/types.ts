export interface ICard {
    _id: string,
    title: string,
    mainImage: string,
    description: string,
    category: string,
    price: number,
    characteristics: TCharacteristics
} 

type TCharacteristics = {
    size: string,
    structure: string,
    moreImage: TImage[]
}

type TImage = {
    image2: string,
    image3: string,
    image4: string
}

export interface IBasket {
    id: string,
    title: string,
    price: number,
    count: number,
    image: string,
}