

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