import styled from '@emotion/styled';

const EventContent = () => {
  return (
    <Container>
      <h2>실시간 이벤트 순위</h2>
      <p>이곳에 이벤트 리스트가 표시될 예정입니다.</p>
    </Container>
  );
};

export default EventContent;

const Container = styled.div`
  padding: 16px;
`;
