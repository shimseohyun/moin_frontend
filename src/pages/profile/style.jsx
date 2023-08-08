import { styled } from "styled-components";
import { ReactComponent as MypageBook } from "../../assets/images/icon/mypageBook.svg";
import colors from "../../style/theme";

// 전체 width 차지
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ProfileBanner = styled.div`
  display: flex;
  width: 100%;
  height: 30rem;
  background-color: rgba(0, 10, 65, 0.97);
`;

export const ProfileBannerHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 17rem;
  margin-right: 17rem;
  width: 100%;
  justify-content: space-between;
`;

export const ProfileBannerHeaderContainer = styled.div`
  margin-top: 18rem;
  display: flex;
  flex-direction: column;
`;
export const ProfileBannerHeaderTitleBox = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  color: white;
  font-size: 1.5rem;
  width: 14rem;
  height: 3rem;
  border-radius: 1rem;
`;

export const ProfileBannerHeaderTitle = styled.div`
  display: flex;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  font-size: 5rem;
  font-weight: 700;
  line-height: normal;
`;
// MypageBook
export const MypageBookImg = styled(MypageBook)`
  display: flex;
  width: 17rem;
  height: 12rem;
  margin-top: 16.5rem;
`;

export const myPageUserIcon = styled.img`
  display: flex;
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
`;

export const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  height: 100%;
  max-width: 1178px;
  width: 100%;
  margin-top: 13rem;
  border: 1px solid black;
`;

export const ProfileInfoHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const ProfileInfoHeaderTitle = styled.div`
  display: flex;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: normal;
  color: ${colors.black};
`;

export const ProfileInfoHeaderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: white;
  color: #aeafb9;
  border: 1px solid #aeafb9;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

export const ProfileInfoHeaderTitleName = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: normal;
  color: ${colors.primary1};
`;
