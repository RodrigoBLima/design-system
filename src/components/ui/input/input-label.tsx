export interface InputLabelProps {
  labelText: string;
  labelFor: string;
}

const InputLabel = (props: InputLabelProps) => {
  const { labelText, labelFor } = props;
  return (
    <label
      htmlFor={labelFor}
      className="self-stretch justify-center text-sm text-content-neutral-500 font-semibold leading-tight tracking-tight"
    >
      {labelText}
    </label>
  );
};

export { InputLabel };
