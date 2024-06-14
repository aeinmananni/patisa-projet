/* eslint-disable no-unsafe-optional-chaining */
import { Link } from "react-router-dom";
import CustomDiv from "../../../customaize-ul/custom-div-footer";
import { LinkArrayType } from "../../../models";
import { sortAndFilterLinks } from "../../../function/sorting";

type Props = {
  children: React.ReactNode;
  linkArray: LinkArrayType[];
  customDivClassName?: string;
};

const QuickAccess = ({ children, linkArray, customDivClassName }: Props) => {
  const sortedLinks = sortAndFilterLinks(linkArray);
  return (
    <CustomDiv className={customDivClassName}>
      <div className="flex flex-col items-center gap-4">
        {children}
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
