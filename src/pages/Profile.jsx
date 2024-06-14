import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { updateProfile } from '../lib/api/auth';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
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
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export default function Profile({ user, setUser }) {
  const [nickname, setNickname] = useState('');
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append('nickname', nickname);
    formData.append('avatar', avatar);
    const response = await updateProfile(formData);
    if (response.success) {
      setUser({ ...user, nickname: response.nickname, avatar: response.avatar });
      navigate('/');
    }
  };

  return (
    <Container>
      {/* <h2>프로필 수정</h2> */}
      <InputGroup>
        <label htmlFor="nickname"></label>
        <input
          type="text"
          placeholder="닉네임"
          minLength="1"
          maxLength="10"
          onChange={(e) => setNickname(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="avatar"></label>
        <input type="file" accept="image/*" onChange={(e) => setAvatar(e.target.files[0])} />
      </InputGroup>
      <Button onClick={handleUpdateProfile}>프로필 업데이트</Button>
    </Container>
  );
}
