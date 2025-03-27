import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePreserveScroll } from '@/features/category-scroll/usePreserveScroll';
import { CATEGORIES } from './constants';

const CategoryTabs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { scrollRef, rememberScroll } = usePreserveScroll();
  const handleClick = (path: string) => {
    rememberScroll();
    navigate(path);
  };
  return (
    <Wrapper ref={scrollRef}>
      <TabList>
        {CATEGORIES.map(({ label, path }) => (
          <TabItem key={path} isActive={pathname === path} onClick={() => handleClick(path)}>
            {label}
          </TabItem>
        ))}
      </TabList>
    </Wrapper>
  );
};

export default CategoryTabs;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  overflow-x: auto;
  white-space: nowrap;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TabList = styled.ul`
  display: flex;
  gap: 12px;
  padding: 10px 12px;
`;

const TabItem = styled.li<{ isActive: boolean }>`
  font-size: 16px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
`;
