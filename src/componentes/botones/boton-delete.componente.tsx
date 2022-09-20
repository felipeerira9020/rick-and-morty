import { FC } from "react";

interface Props {
  title: string;
  buttonName: string;
  handleClick: () => void;
}
const BotonDelete: FC<Props> = ({ title, buttonName, handleClick }: Props) => {
  return (
    <div className="actions">
      <h3>{title}</h3>
      <button className="danger" onClick={handleClick}>
        {buttonName}
      </button>
    </div>
  );
};
export default BotonDelete;
