import { useParams } from "react-router-dom";
import { useEffect } from "react";
import c from "./article.module.scss";
import { data, aboutData } from "../../data/portfolioData";
import Navigation from "../../components/navigation/Navigation";
import VideoBlock from "./ContentBlocks/VideoBlock/VideoBlock";
import CustomBlock from "./ContentBlocks/CustomBlock/CustomBlock";
import ContentBlock from "./ContentBlocks/ContentBlock/ContentBlock";
import QuoteBlock from "./ContentBlocks/QuoteBlock/QuoteBlock";
import PresentationModal from "../../components/PresentationModal/PresentationModal";
import { Play } from "lucide-react";
import { usePresentationMode } from "../../contexts/PresentationContext";
import ArticleNavigation from "./ArticleNavigation/ArticleNavigation";

const Article = ({ isAbout = false }) => {
  const { title } = useParams();
  const { isPresentationMode, enterPresentationMode, exitPresentationMode } = usePresentationMode();

  const articleData = isAbout ? aboutData : data.find((article) => article.title === decodeURIComponent(title));

  // Reset scroll to top when article changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title, isAbout]); // Reset when title or isAbout changes

  if (!articleData) {
    return <div>Article not found</div>;
  }

  const renderContentBlock = (block, index) => {
    switch (block.type) {
      case "video":
        return <VideoBlock key={index} {...block} />;
      case "contentBlock":
        return <ContentBlock key={index} {...block} />;
      case "custom":
        return <CustomBlock key={index} {...block} />;
      case "quote":
        return <QuoteBlock key={index} {...block} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navigation />
      <div className={c.article}>
        <header className={c.header}>
          <div className={c.titleGroup}>
            <h1>{articleData.title}</h1>
            {articleData.entity && (
              <div className={c.meta}>
                <span>{articleData.entity}</span>
                {articleData.year && <span> • {articleData.year}</span>}
              </div>
            )}
          </div>
          {/* Only show play button for regular articles, not for about page */}
          {!isAbout && (
            <button className={c.presentButton} onClick={enterPresentationMode}>
              <Play size={24} />
            </button>
          )}
        </header>

        <div className={c.content}>{articleData.content?.map((block, index) => renderContentBlock(block, index))}</div>
      </div>

      <PresentationModal
        isOpen={isPresentationMode}
        onClose={exitPresentationMode}
        slides={articleData.content || []}
        title={articleData.title}
        entity={articleData.entity}
        year={articleData.year}
      />
    </>
  );
};

export default Article;
