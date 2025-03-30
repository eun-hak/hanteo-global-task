import styled from '@emotion/styled';
import { bannerList } from '../model/bannerData';

const CustomDots = ({ length, realIndex }: { length: number; realIndex: number }) => {
  return (
    <Dots>
      {bannerList.map((_, idx) => (
        <Dot key={idx} active={idx === realIndex} />
      ))}
    </Dots>
  );
};

const Dots = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  gap: 6px;
  padding-top: 12px;
`;

const Dot = styled.div<{ active: boolean }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${({ active, theme }) => (active ? theme.colors.accent : theme.colors.gray)};
`;
export default CustomDots;
