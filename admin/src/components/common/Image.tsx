interface IProps {
  width: string;
  height: string;
  src: string;
}

const Image = (props: IProps) => {
  return (
    <img
      src={props.src}
      alt={props.src}
      className={`${props.width} ${props.height} object-cover`}
    />
  );
};

export default Image;
