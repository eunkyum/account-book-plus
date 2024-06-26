import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { register } from '../lib/api/auth';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: transparent;
  border-radius: 8px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4f7a39;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    background-color: #4f7a39;
  }
`;

const ToggleButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4f7a39;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

export default function SignUp() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handelRegister = async () => {
    if (id.length < 4 || id.length > 10) {
      alert('아이디는 4글자에서 10글자 이내로만 가능합니다!');
      return;
    }

    if (password.length < 4 || password.length > 15) {
      alert('비밀번호는 4글자에서 15글자 이내로만 가능합니다!');
      return;
    }

    if (nickname.length < 1 || nickname.length > 10) {
      alert('닉네임은 1글자에서 10글자 이내로만 가능합니다!');
      return;
    }

    // API 호출을 진짜로 하는 부분
    const response = await register({ id, password, nickname });
    if (response) {
      confirm('회원가입이 완료되었습니다.');
      navigate('/sign_in');
    }
  };

  return (
    <Container>
      <InputGroup>
        <label htmlFor="id"></label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디"
          minLength={4}
          maxLength={10}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="password"></label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="아이디" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="nickname"></label>
        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="닉네임" />
      </InputGroup>
      <Button onClick={handelRegister}>회원가입</Button>
      <ToggleButton onClick={() => navigate('/sign_in')}>돌아가기</ToggleButton>
    </Container>
  );
}
