import styled from '@emotion/styled';
import { Virtuoso } from 'react-virtuoso';
import { useHanteoListController } from '../model/useContentListController';
import ListItem from './ListItem';
import HanteoSkeleton from './Skeleton';

const HanteoList = ({ type, contentName }: { type: string; contentName?: string }) => {
  const { flatData, loadMore, isLoading, isFetchingNextPage } = useHanteoListController(type);

  return (
    <div>
      <VirtuosoWrapper>
        <ContentName>{contentName} 목록</ContentName>
        {isLoading && Array.from({ length: 8 }).map((_, i) => <HanteoSkeleton key={i} />)}
        <Virtuoso
          style={{ height: '100%' }}
          data={flatData}
          components={{
            Scroller: CustomScroller,
            Footer: () =>
              isFetchingNextPage ? (
                <Footer>
                  <Spinner />
                </Footer>
              ) : null,
          }}
          endReached={loadMore}
          itemContent={(index, item) => <ListItem key={item.title} item={item} />}
        />
      </VirtuosoWrapper>
    </div>
  );
};

export default HanteoList;

const VirtuosoWrapper = styled.div`
  height: calc(100vh - 300px);
  padding-bottom: 88px;
`;

const ContentName = styled.div`
  padding: 12px;
  font-weight: 700;
`;
const CustomScroller = styled.div`
  scrollbar-width: none;
`;

const Footer = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  width: 25px;
  height: 25px;
  border: 3px solid #ccc;
  border-top: 3px solid #333;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
