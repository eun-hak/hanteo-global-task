import styled from '@emotion/styled';
import ContentList from '@/features/content-list';

const ChartContent = () => {
  return (
    <Container>
      <ContentList type="charts" contentName="차트" />
    </Container>
  );
};

export default ChartContent;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`;
