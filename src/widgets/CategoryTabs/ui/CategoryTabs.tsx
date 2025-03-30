import styled from '@emotion/styled';
import { CATEGORIES } from '../model/constants';
import { useCategoryTabsController } from '../model/useCategoryTabsController';

const CategoryTabs = () => {
  const { activeIndex, setActiveIndex, tabRefs } = useCategoryTabsController();

  return (
    <Wrapper>
      <TabList>
        {CATEGORIES.map(({ label }, index) => (
          <TabItem
            key={label}
            ref={el => {
              tabRefs.current[index] = el;
            }}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            {label}
          </TabItem>
        ))}
      </TabList>
    </Wrapper>
  );
};

export default CategoryTabs;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
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
  font-size: 17px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
`;
