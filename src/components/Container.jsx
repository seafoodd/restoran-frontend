
const Container = ({children, id, className}) => {
  return <div id={id} className={"mx-[166px] "+className}>{children}</div>;
};

export default Container;