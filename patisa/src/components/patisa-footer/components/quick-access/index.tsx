/* eslint-disable no-unsafe-optional-chaining */
import { Link } from "react-router-dom";
import CustomDiv from "../../../customaize-ul/custom-div-footer";
import { LinkArrayType } from "../../../models";
import { sortAndFilterLinks } from "../../../function/sorting";

type Props = {
  icons: string;
  title: string;
  linkArray: LinkArrayType[];
};

const QuickAccess = ({ icons, title, linkArray }: Props) => {
  const sortedLinks = sortAndFilterLinks(linkArray);
  return (
    <CustomDiv>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-1 text-sm">
          <img src={icons} />
          <span className="text-colorPrimary">{title}</span>
        </div>
        <div className="text-sm flex flex-col items-start gap-2">
          {sortedLinks.map((items) => (
            <>
              <Link key={items.id} to={items.path}>
                {items.linkName}
              </Link>
            </>
          ))}
        </div>
      </div>
    </CustomDiv>
  );
};

export default QuickAccess;
