import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const HanteoSkeleton = () => {
  return (
    <SkeletonItem>
      <Thumbnail />
      <Meta>
        <Title />
        <Artist />
        <Score />
      </Meta>
    </SkeletonItem>
  );
};

export default HanteoSkeleton;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonBase = styled.div`
  display: block;
  background: #e0e0e0;
  border-radius: 4px;
  animation: ${shimmer} 1.5s infinite linear;
  background-image: linear-gradient(to right, #e0e0e0 0%, #f5f5f5 50%, #e0e0e0 100%);
  background-size: 200px 100%;
`;

const SkeletonItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  align-items: center;
  min-height: 84px;
`;

const Thumbnail = styled(SkeletonBase)`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  flex-shrink: 0;
`;

const Meta = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Title = styled(SkeletonBase)`
  width: 90%;
  height: 16px;
`;

const Artist = styled(SkeletonBase)`
  width: 90%;
  height: 13px;
`;

const Score = styled(SkeletonBase)`
  width: 90%;
  height: 13px;
`;
