import styled from '@emotion/styled';
import ContentList from '@/features/content-list';

const EventContent = () => {
  return (
    <Container>
      <ContentList type="events" contentName="이벤트" />
    </Container>
  );
};

export default EventContent;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`;
