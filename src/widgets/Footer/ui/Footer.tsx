import styled from '@emotion/styled';

const Footer = () => {
  return (
    <StyledFooter>
      <IconWrapper>
        <Icon src="/icon/chartIcon.svg" alt="차트" />
      </IconWrapper>
      <IconWrapper>
        <Icon src="/icon/newsIcon.svg" alt="뉴스" />
      </IconWrapper>
      <MainButton>
        <MainIcon src="/icon/mainIcon.svg" alt="메인" />
      </MainButton>
      <IconWrapper>
        <Icon src="/icon/starIcon.svg" alt="스타" />
      </IconWrapper>
      <IconWrapper>
        <Icon src="/icon/profileIcon.svg" alt="프로필" />
      </IconWrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: space-between;

  align-items: center;
  z-index: 100;
`;

const IconWrapper = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

const MainButton = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MainIcon = styled.img`
  width: 28px;
  height: 28px;
`;
