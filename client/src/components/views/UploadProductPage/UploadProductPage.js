import React, { useState } from 'react';
import { Typography, Button, Form, Input } from 'antd';

const { TextArea } = Input;

function UploadProductPage() {
  const [Title, setTitle] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.currentTarget.value);
  };

  return (
    <div>
      <div>
        <div>
          <h2>여행 상품 업로드</h2>
        </div>

        <Form>
          <label>이름</label>
          <Input onChange={titleChangeHandler} value={Title} />
          <br />
          <label>이름</label>
          <TextArea />
          <br />
          <label>이름</label>
          <Input />
          <br />
          <label>이름</label>
          <select>
            <option></option>
            <option></option>
            <option></option>
          </select>
          <br />
          <Button>확인</Button>
        </Form>
      </div>
    </div>
  );
}

export default UploadProductPage;
