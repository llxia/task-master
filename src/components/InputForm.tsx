import { useState, type FC } from "react";
import { Button, Input } from "antd";

interface InputFormProps {
  onAdd: (input: string) => void;
}
export const InputForm: FC<InputFormProps> = ({ onAdd }) => {
  const [input, setInput] = useState("");
  return (
    <form
      className="task-creator"
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(input);
        setInput("");
      }}
    >
      <Input
        placeholder="Task to be added"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Button type="primary" htmlType="submit" disabled={!input}>
        Add
      </Button>
    </form>
  );
};
