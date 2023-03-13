export interface IntegerInputProps extends React.HTMLProps<HTMLInputElement> {
  onChangeOverided?: React.ChangeEventHandler<HTMLInputElement>;
}

const IntegerInput: React.FunctionComponent<IntegerInputProps> = (props) => {
  const {
    className,
    onChange = (evt) => {},
    onChangeOverided = (evt) => {
      {
        evt.target.value = evt.target.value
          .replaceAll(/,/g, "")
          .replaceAll(/[^0-9]+$/g, "");

        console.log("안에서 정제한 evt.target.value >>> ", evt.target.value);
        const foo = () => {
          return new Promise((resolve, reject) => {
            resolve(onChange(evt));
          });
        };
        foo().then(() => {
          evt.target.value = evt.target.value.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          );
        });
      }
    },
    ...restProps
  } = props;

  const baseStyleClasses = "border-2 p-2 flex-auto outline-main";

  return (
    <input
      {...restProps}
      className={`${baseStyleClasses} ${className}`}
      onChange={(evt) => {
        onChangeOverided(evt);
        onChange(evt);
      }}
    />
  );
};

export default IntegerInput;
