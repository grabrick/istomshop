export interface ICard {
    _id: string,
    title: string,
    mainImage: string,
    description: string,
    category: string,
    price: number
} 

export interface IBasket {
    id: string,
    title: string,
    price: number,
    count: number,
    image: string,
}