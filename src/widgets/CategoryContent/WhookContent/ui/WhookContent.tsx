import styled from '@emotion/styled';
import ContentList from '@/features/content-list';

const WhookContent = () => {
  return (
    <Container>
      <ContentList type="whook" contentName="whook" />
    </Container>
  );
};

export default WhookContent;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`;
