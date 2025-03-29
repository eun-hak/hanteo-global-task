import styled from '@emotion/styled';
import ContentList from '@/features/content-list';

const StoreContent = () => {
  return (
    <Container>
      <ContentList type="store" contentName="상점" />
    </Container>
  );
};

export default StoreContent;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`;
