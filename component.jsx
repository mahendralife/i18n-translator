import { useTranslation } from "react-i18next";

const Home = () => {
  const title ="welcome";
  const { translate } = useTranslation();
  return (<div> {t(title)}</div>)

};
