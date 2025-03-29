import styled from '@emotion/styled';
import ContentList from '@/features/content-list';

const ChargeContent = () => {
  return (
    <Container>
      <ContentList type="charge" contentName="충전" />
    </Container>
  );
};

export default ChargeContent;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`;
