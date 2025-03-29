import styled from '@emotion/styled';
import ContentList from '@/features/content-list';

const NewsContent = () => {
  return (
    <Container>
      <ContentList type="news" contentName="뉴스" />
    </Container>
  );
};

export default NewsContent;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`;
