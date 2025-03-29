import styled from '@emotion/styled';
import HanteoList from '@/features/hanteo';

const ChartContent = () => {
  return (
    <Container>
      <HanteoList />
    </Container>
  );
};

export default ChartContent;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`;
