import React, { useState, useEffect } from "react";
import { Layout, Col, Row } from "antd";
import { SkeletonCardArticle } from "./components/skeletons/SkeletonCardArticle";
import { Headers } from "./components/navbar/Header";
import { Footers } from "./components/navbar/Footers";
import { IArticle } from "./utils/interface/article";
import { CardAricle } from "./components/CardArticle";
import { PaginationPage } from "./components/PaginationPage";
import { FiltersPage } from "./components/FiltersPage";
const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState("publishedAt");
  const [search, setSearch] = useState<string>("");
  const [rangeDate, setRangeDate] = useState<{ from: string; to: string }>();

  let skeletonLoading = [];
  for (let i = 0; i < 3; i++) {
    skeletonLoading.push(
      <Col key={i} xs={24} sm={24} md={12} xl={8} xxl={6}>
        <SkeletonCardArticle />
      </Col>
    );
  }
  useEffect(() => {
    getArticle();
  }, [pageSize, page, sortBy, search, rangeDate]);

  const getArticle = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=514f22df00db4162a6ccacf43305212b
      &pageSize=${pageSize}&page=${page}&sortBy=${sortBy}${
      search ? "&q=" + search : ""
    }${rangeDate ? "&from=" + rangeDate?.from + "&to=" + rangeDate?.to : ""}`;
    const data = await fetch(url, {
      method: "GET",
    });
    const jsonData = await data.json();
    setTotalResults(jsonData.totalResults);
    setArticles(jsonData.articles);
    setLoading(false);
  };

  return (
    <Layout>
      <Headers />
      <Layout.Content className="content">
        <FiltersPage
          setSortBy={setSortBy}
          setSearch={setSearch}
          setRangeDate={setRangeDate}
        />
        {loading ? (
          <Row>{skeletonLoading}</Row>
        ) : (
          <Row gutter={[16, 16]}>
            {articles &&
              articles.map((article: IArticle) => (
                <Col key={article.title} xs={24} sm={24} md={12} xl={8} xxl={6}>
                  <CardAricle article={article}></CardAricle>
                </Col>
              ))}
          </Row>
        )}
        <div style={{ textAlign: "center" }}>
          {totalResults > 0 ? (
            <PaginationPage
              total={totalResults}
              page={page}
              pageSize={pageSize}
              setPage={setPage}
              setPageSize={setPageSize}
            />
          ) : loading ? (
            "Loading . . ."
          ) : (
            "Tidak ada data"
          )}
        </div>
      </Layout.Content>
      <Footers />
    </Layout>
  );
};

export default App;
