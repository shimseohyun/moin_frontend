import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import * as S from "./style";

// 컴포넌트
import Selector from "../selector/Selector";
import Paging from "../paging/Paging";
import { useRecoilState } from "recoil";
import { userState } from "../../../context/authState";
import NoPage from "../noPage/NoPage";

const List = ({
  data,
  url,
  writeUrl,
  SelectorOption,
  currentOption,
  getCurrentOption,
  currentPage,
  setCurrentPage,
  count
}) => {
  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const navigate = useNavigate();

  //Paging
  // 한 페이지당 보여줄 댓글 수
  const itemsPerPage = 10;

  // 페이지 변경 핸들러
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };
  const location = useLocation();
  const decodeName = decodeURI(location.pathname.split("/")[2]);
  console.log(decodeName);
  return (
    <>
      <S.AiServiceDetailTipWrap>
        <S.AiServiceDetailTipHeader>
          <S.AiServiceDetailTipHeaderWrite>
            <S.AiServiceDetailTipHeaderWriteContent
              onClick={() => {
                // 로그인하지 않은 경우 로그인 페이지로 이동
                !userInfo
                  ? navigate("/login")
                  : navigate(writeUrl, {
                      state: { category: "tip", ai: decodeName }
                    });
              }}
            >
              <S.StyledPencilIcon />
              글쓰기
            </S.AiServiceDetailTipHeaderWriteContent>
          </S.AiServiceDetailTipHeaderWrite>
          <S.AiServiceDetailTipHeaderSort>
            <Selector
              options={SelectorOption}
              getCurrentOption={getCurrentOption}
            />
          </S.AiServiceDetailTipHeaderSort>
        </S.AiServiceDetailTipHeader>
        <S.AiServiceDetailTipLine></S.AiServiceDetailTipLine>
        {/* 데이터 목록 */}
        {data && data.length > 0 ? (
          <S.AiServiceDetailTipTable>
            <S.AiServiceDetailTipTableThead>
              <S.AiServiceDetailTipTableTr>
                <S.AiServiceDetailTipTableTh>번호</S.AiServiceDetailTipTableTh>
                <S.AiServiceDetailTipTableTh>제목</S.AiServiceDetailTipTableTh>
                <S.AiServiceDetailTipTableTh>
                  서비스명
                </S.AiServiceDetailTipTableTh>
                <S.AiServiceDetailTipTableTh>
                  등록일시
                </S.AiServiceDetailTipTableTh>
                <S.AiServiceDetailTipTableTh> </S.AiServiceDetailTipTableTh>
              </S.AiServiceDetailTipTableTr>
            </S.AiServiceDetailTipTableThead>
            <S.AiServiceDetailTipTableTbody>
              {data.map((data, idx) => (
                <S.AiServiceDetailTipTableTrContent
                  key={data.id}
                  onClick={() => navigate(`${url}${data.id}`)}
                >
                  <S.AiServiceDetailTipTableTd>
                    {currentOption === "popular" || currentOption === "like"
                      ? idx + 1 + (currentPage - 1) * itemsPerPage
                      : count - idx - (currentPage - 1) * itemsPerPage}
                  </S.AiServiceDetailTipTableTd>
                  <S.AiServiceDetailTipTableTd>
                    {data.title}
                  </S.AiServiceDetailTipTableTd>
                  <S.AiServiceDetailTipTableTd>
                    {data.ai}
                  </S.AiServiceDetailTipTableTd>
                  <S.AiServiceDetailTipTableTd>
                    {data.created_at}
                  </S.AiServiceDetailTipTableTd>
                  <S.AiServiceDetailTipTableTd>
                    <S.LikeIcon />
                    {data.likes_cnt}
                    <S.CommentIcon />
                    {data.comments_cnt}
                  </S.AiServiceDetailTipTableTd>
                </S.AiServiceDetailTipTableTrContent>
              ))}
            </S.AiServiceDetailTipTableTbody>
          </S.AiServiceDetailTipTable>
        ) : (
          <>
            <NoPage />
          </>
        )}
        {/* 페이지네이션 컴포넌트 사용 */}
        <S.AiServiceDetailTipPaging>
          <Paging
            page={currentPage}
            count={count}
            postPerPage={itemsPerPage}
            setPage={handlePageChange}
          />
        </S.AiServiceDetailTipPaging>
      </S.AiServiceDetailTipWrap>
    </>
  );
};

export default List;
