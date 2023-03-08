import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { Col, Row, Select, Input, DatePicker } from "antd";
const { RangePicker } = DatePicker;
type TRangeDate = {
  from: string;
  to: string;
};
type TRangePresets = {
  label: string;
  value: [Dayjs, Dayjs];
};
interface IFiltersProps {
  setSearch: (sortBy: string) => void;
  setSortBy: (search: string) => void;
  setRangeDate: (rangeDate: TRangeDate) => void;
}
export const FiltersPage = (props: IFiltersProps) => {
  const { setSearch, setSortBy, setRangeDate } = props;

  const handleChange = (value: string) => {
    setSortBy(value);
  };

  const onSearch = (text: string) => {
    setSearch(text);
  };

  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    if (dates) {
      setRangeDate({ from: dateStrings[0], to: dateStrings[1] });
    } else {
      setRangeDate({ from: "", to: "" });
    }
  };

  const rangePresets: TRangePresets[] = [
    { label: "Last 7 Days", value: [dayjs().add(-7, "d"), dayjs()] },
    { label: "Last 14 Days", value: [dayjs().add(-14, "d"), dayjs()] },
    { label: "Last 30 Days", value: [dayjs().add(-30, "d"), dayjs()] },
    { label: "Last 90 Days", value: [dayjs().add(-90, "d"), dayjs()] },
  ];

  return (
    <Row gutter={[4, 4]} style={{ marginBottom: "20px" }}>
      <Col xs={24} sm={24} md={16} xl={16}>
        <RangePicker presets={rangePresets} onChange={onRangeChange} />
      </Col>
      <Col xs={24} md={8} sm={24} xl={8} className="text-right">
        <Row gutter={4}>
          <Col xs={10} sm={24} md={8} xl={8}>
            <Select
              defaultValue="publishedAt"
              style={{ width: "100%" }}
              onChange={handleChange}
              options={[
                { value: "publishedAt", label: "Terbaru" },
                { value: "popularity", label: "Populer" },
                { value: "relevancy", label: "Terkait" },
              ]}
            />
          </Col>
          <Col xs={14} sm={12} md={16} xl={16}>
            <Input.Search
              placeholder="Cari..."
              style={{ width: "100%" }}
              onSearch={onSearch}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
