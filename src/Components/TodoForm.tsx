/** @format */

import { useRef, useEffect } from 'react';
import { Button, Form, Input, InputRef } from 'antd';

interface ITodoForm {
  addTodo: (text: string) => void;
}

const TodoForm = ({ addTodo }: ITodoForm) => {
  const textInput = useRef<InputRef | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    if (textInput.current) textInput.current.focus();
  }, []);

  const onSubmitHandler = (values: { myName: string }) => {
    const text = values.myName;
    if (text === '') {
      return;
    } else {
      addTodo(text);
      form.resetFields();
      setTimeout(() => textInput.current?.focus(), 100);
    }
  };

  return (
    <div>
      <Form form={form} onFinish={onSubmitHandler}>
        <Form.Item name={'myName'}>
          <Input placeholder="Enter new todo..." ref={textInput} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TodoForm;
