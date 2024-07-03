

export type LinkArrayType = {
    id:number
    path:string
    linkName:string
}

export type CategoryModalType = {
     id:number
     title:string,
     icon:React.ReactNode
}

export type ServicesPatisaType = {
     id:number
     image:string
     title:string
     description:string
     width?:number
}

export type LatestProductsCartType = {
     id:number,
     imageAddres :string
     dressTitle:string
     code:string
     price:string
     sizes:string[]
     colors:string[]
}


 export type LatestProducCartSalseType = LatestProductsCartType & {
      off:string
 }

export type BestCartInfoType = Pick<LatestProductsCartType , "id" | "dressTitle"|"price"|"code"|"imageAddres">

export type BestSellingCartType = {
      id:number,
      title :string,
      image:string,
      CartInfo : BestCartInfoType[]
}

export type MantoType = Pick<BestSellingCartType,"id"|"title"|"image"> &{
  date:string
}

export type SliderItemsType ={
      id:number
      primaryId:string
      imageUrl : string
}

export type LinksType = {
     id:number
     link:string
}


export type WidthHandelType<T> = {
      products:T[]
}