interface IProps {
  title: string;
  onClose: any;
}

const PopupTitle = (props: IProps) => {
  return (
    <div className="title flex justify-between items-center px-4 py-2 border-b border-thin">
      <h2 className="text-[24px] text-white ">{props.title}</h2>
      <i
        className="bx bx-x text-[28px] text-white cursor-pointer hover:text-green-500 transition-all"
        onClick={props.onClose}
      ></i>
    </div>
  );
};

export default PopupTitle;
