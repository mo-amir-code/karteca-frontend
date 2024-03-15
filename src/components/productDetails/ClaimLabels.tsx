import { claims } from '@/data';
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiReturnArrow } from "react-icons/gi";

const ClaimLabels = () => {
  return (
    <div className="flex max-md:hidden items-center justify-between p-3 bg-tertiary-color">
          {claims.map((claim, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-2 text-sm max-lg:text-xs font-medium"
            >
              {(() => {
                switch (claim.icon) {
                  case "genuine":
                    return <VscWorkspaceTrusted size={16} />;
                  case "return":
                    return <GiReturnArrow size={16} />;
                  case "sold":
                    return <span>Sold By: </span>;
                  default:
                    return;
                }
              })()}
              <span>{claim.msg}</span>
            </div>
          ))}
        </div>
  )
}

export default ClaimLabels