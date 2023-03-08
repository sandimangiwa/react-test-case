import { Pagination } from "antd";
import type { PaginationProps } from "antd";
interface IPaginationProps {
  total: number;
  page: number;
  pageSize: number;
  setPage: (page: number) => void;
  setPageSize: (page: number) => void;
}
export const PaginationPage = (props: IPaginationProps) => {
  const { total, page, pageSize, setPage, setPageSize } = props;
  const onChange: PaginationProps["onChange"] = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
  };
  return (
    <>
      <Pagination
        onChange={onChange}
        total={total}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        defaultPageSize={pageSize}
        current={page}
      />
    </>
  );
};
