import styled from '@emotion/styled';
import type { Banner } from '../model/types';

interface Props {
  banner: Banner;
}

const BannerCard = ({ banner }: Props) => {
  return (
    <a href={banner.href} target="_blank" rel="noopener noreferrer">
      <Card>
        <ImageWrapper>
          <Image src={banner.imageUrl} alt={banner.title} />
          {banner.status === 'ongoing' && <Badge>진행 중</Badge>}
        </ImageWrapper>
        <Content>
          <ContentTop>
            <Title>{banner.title}</Title>
            <ActiveButton>{banner.buttonLabel ?? '바로가기'}</ActiveButton>
          </ContentTop>
          <DateRange>{`${banner.startDate} ~ ${banner.endDate} (KST)`}</DateRange>
        </Content>
      </Card>
    </a>
  );
};

export default BannerCard;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 130px;
  object-fit: cover;
`;

const Badge = styled.div`
  position: absolute;
  top: 10px;
  left: 12px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 4px 6px;
  border-radius: 6px;
`;

const Content = styled.div`
  padding: 6px 16px 12px 16px;
`;

const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 0.9rem;
  font-weight: 700;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ActiveButton = styled.button`
  font-size: 0.75rem;
  font-weight: 700;
  margin-left: 30px;
  padding: 3px 10px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 16px;
  background-color: white;
  color: ${({ theme }) => theme.colors.accent};
  white-space: nowrap;
  flex-shrink: 0;
`;
const DateRange = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 6px;
  text-align: right;
`;
