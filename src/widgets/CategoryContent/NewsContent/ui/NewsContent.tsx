import styled from '@emotion/styled';

const NewsContent = () => {
  return (
    <Container>
      <h2>실시간 뉴스 순위</h2>
      <p>이곳에 차트 리스트가 표시될 예정입니다.</p>
    </Container>
  );
};

export default NewsContent;

const Container = styled.div`
  padding: 16px;
`;
