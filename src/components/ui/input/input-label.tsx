export interface InputLabelProps {
  labelText: string;
  labelFor: string;
}

const InputLabel = (props: InputLabelProps) => {
  const { labelText, labelFor } = props;
  return (
    <label htmlFor={labelFor} className="text-sm text-neutral">
      {labelText}
    </label>
  );
};

export { InputLabel };
