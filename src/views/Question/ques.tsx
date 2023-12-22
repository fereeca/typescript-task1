interface Props {
  title: string;
}

function Question(props: Props) {
  const { title } = props;
  return (
    <>
      <p>{title}</p>
    </>
  );
}
export default Question;
