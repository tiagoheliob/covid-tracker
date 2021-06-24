import Skeleton from "react-loading-skeleton";
import { mappedFieldsToRender, formatNumber } from "./constant";
import { formatInfo } from "../../helpers/dataFormat";
import "./infoList.css";

export default ({ country, isLoading }) => {
  if (!country || isLoading) {
    return <Skeleton count={18} />;
  }

  const list = mappedFieldsToRender.map(({ field, label }) => {
    return (
      <li key={field} className="info-list-container-item">
        {label}: {formatInfo(country[field])}
      </li>
    );
  });

  return <ul className="info-list-container">{list}</ul>;
};
