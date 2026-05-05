import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import c from './article-navigation.module.scss'

const ArticleNavigation = ({ currentArticle, allArticles }) => {
  const currentIndex = allArticles.findIndex((article) => article.title === currentArticle.title)
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null

  if (!prevArticle && !nextArticle) return null

  return (
    <nav className={c.articleNavigation}>
      <div className={c.navContainer}>
        {prevArticle ? (
          <Link to={`/article/${encodeURIComponent(prevArticle.title)}`} className={c.navLink}>
            <div className={c.navContent} style={{ alignItems: 'flex-start' }}>
              <span className={c.navLabel}>
                <ChevronLeft size={20} />
                Previous
              </span>
              <span className={c.navTitle}>{prevArticle.title}</span>
            </div>
          </Link>
        ) : (
          <div className={c.navPlaceholder}></div>
        )}

        {nextArticle ? (
          <Link to={`/article/${encodeURIComponent(nextArticle.title)}`} className={`${c.navLink} ${c.nextLink}`}>
            <div className={c.navContent} style={{ alignItems: 'flex-end' }}>
              <span className={c.navLabel}>
                Next <ChevronRight size={20} />
              </span>
              <span className={c.navTitle}>{nextArticle.title}</span>
            </div>
          </Link>
        ) : (
          <div className={c.navPlaceholder}></div>
        )}
      </div>
    </nav>
  )
}

export default ArticleNavigation
