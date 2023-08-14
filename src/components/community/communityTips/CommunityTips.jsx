import React, { useEffect, useState } from "react";
import * as S from "./style";
import List from "../../common/list/List";
import TipsList from "../../common/tipsList/TipsList";
import axios from "../../../api/axios";
function CommunityTips() {
  const [tipContent, setTipContent] = useState([]);

  const [Ais, setAis] = useState([]);

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  const SelectorOption = [
    { value: "recent", title: "최신순" },
    { value: "popular", title: "조회순" },
    { value: "like", title: "좋아요순" }
  ];

  const [currentOption, setCurrentOption] = useState("recent");

  const getCurrentOption = option => {
    setCurrentOption(option);
  };

  const fetchAiContent = async () => {
    try {
      const response = await axios.get("moin/all/ai");
      const aiData = response.data.results;

      setAis(["aa", "aiData"]);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchTipContent = async () => {
    try {
      const response = await axios.get(
        `/communities/tips?ordering=${currentOption}&page=${currentPage}`
      );

      const tipContentData = response.data.results;
      setTipContent(tipContentData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchAiContent();
    console.log(Ais);
    fetchTipContent();
  }, [currentOption]);

  return (
    <>
      <TipsList
        data={tipContent}
        url={"/community/tips/"}
        writeUrl={"/community/create"}
        currentOption={currentOption}
        SelectorOption={SelectorOption}
        getCurrentOption={getCurrentOption}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        Ais={Ais}
      />
    </>
  );
}

export default CommunityTips;
