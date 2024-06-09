import { LinkArrayType } from "../models";


export const sortAndFilterLinks = (links: LinkArrayType[]): LinkArrayType[] => {
    const sortedLinks = [...links].sort((a, b) => b.linkName.localeCompare(a.linkName));
    const filteredLinks = sortedLinks.filter((_link, index) => index !== 2).filter((_link,index)=> index !== 4);
  
    return filteredLinks;
  };