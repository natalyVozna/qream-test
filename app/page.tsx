import ContentBox from "./components/ContentBox";
import FileCard from "./components/FileCard";
import TreeCard from "./components/TreeCard";
import css from "./page.module.scss";

const filesTree = ["DOS", "TOOLS", "XTGOLD", "LAPLINK", "DN"];
const filesMap = [
  { name: "DN" },
  { name: "autoexec", format: "bat" },
  { name: "command", format: "com" },
  { name: "config", format: "sys" },
  { name: "Io", format: "sys" },
  { name: "11Pro", format: "sys" },
  { name: "Msdod", format: "sys" },
];

export default function Home() {
  return (
    <main className={css.main}>
      <ContentBox title="Tree" textBottom="C:\">
        <TreeCard list={filesTree} />
      </ContentBox>
      <ContentBox title="C:\" textBottom="DN">
        <div className={css.cardBox}>
          <FileCard list={filesMap} />
          <FileCard />
          <FileCard />
        </div>
      </ContentBox>
    </main>
  );
}
