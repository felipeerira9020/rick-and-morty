import { FC } from "react";

interface BotonDeleteProps {
  title: string;
  buttonName: string;
  handleClick: () => void;
}
const BotonDelete: FC<BotonDeleteProps> = ({
  title,
  buttonName,
  handleClick,
}: BotonDeleteProps) => {
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
