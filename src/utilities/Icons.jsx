import React from 'react'

const Icon = ({ children }) => {
  // render
  return <>{children}</>
}

export default Icon

// icons - - -

// Coffee
Icon.Coffee = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" />
    <path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
    <path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
    <path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z" />
    <path d="M16.746 16.726a3 3 0 1 0 .252 -5.72" />
  </svg>
)

// Trash
Icon.Trash = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3M4 7h16m-10 4v6m4-6v6" />
  </svg>
)

// Pencil
Icon.Pencil = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
  </svg>
)

// Add
Icon.Add = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M12 5v14m-7-7h14" />
  </svg>
)

// Remove
Icon.Remove = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

// Info
Icon.Info = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8h.01M11 12h1v4h1" />
  </svg>
)

// DotsVertical
Icon.DotsVertical = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="19" r="1" />
    <circle cx="12" cy="5" r="1" />
  </svg>
)

// DotsHorizontal
Icon.DotsHorizontal = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
)

// ChevronUp
Icon.ChevronUp = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
  </svg>
)

// ChevronDown
Icon.ChevronDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </svg>
)

// ChevronLeft
Icon.ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
)

// ChevronRight
Icon.ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
)

// Search
Icon.Search = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#333333"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="10" cy="10" r="7" />
    <line x1="21" y1="21" x2="15" y2="15" />
  </svg>
)

// ResizeLeft
Icon.ResizeLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 4v16" />
  </svg>
)

// ResizeRight
Icon.ResizeRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M15 4v16" />
  </svg>
)

// ResizeEven
Icon.ResizeEven = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M12 4v16" />
  </svg>
)

// Adjust
Icon.Adjust = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <circle cx="6" cy="10" r="2" />
    <circle cx="12" cy="16" r="2" />
    <circle cx="18" cy="7" r="2" />
    <path d="M6 4v4m0 4v8m6-16v10m0 4v2m6-16v1m0 4v11" />
  </svg>
)

// DocumentDownload
Icon.DocumentDownload = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2zm-5-10v6" />
    <path d="M9 14l3 3 3-3" />
  </svg>
)
Icon.Enter = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 6V12C18 12.7956 17.6839 13.5587 17.1213 14.1213C16.5587 14.6839 15.7957 15 15 15H5M5 15L9 11M5 15L9 19"
      stroke="#747474"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Logout
Icon.Logout = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
    <path d="M7 12h14l-3-3m0 6l3-3" />
  </svg>
)

// Help
Icon.Help = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M12 13.5a1.5 1.5 0 0 1 1-1.5 2.6 2.6 0 1 0-3-4" />
    <circle cx="12" cy="12" r="9" />
    <path d="M12 17v.01" />
  </svg>
)

// External
Icon.External = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5" />
  </svg>
)

// Home
Icon.Home = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6M5 12H3l9-9 9 9h-2" />
  </svg>
)

// Bookmark
Icon.Bookmark = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    {/* <path stroke='none' d='M0 0h24v24H0z' /> */}
    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
  </svg>
)

// Book
Icon.Book = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor "
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
    <line x1="3" y1="6" x2="3" y2="19" />
    <line x1="12" y1="6" x2="12" y2="19" />
    <line x1="21" y1="6" x2="21" y2="19" />
  </svg>
)

//Plus
Icon.Plus = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

//QuestionMark
Icon.QuestionMark = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 8 a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
    <line x1="12" y1="19" x2="12" y2="19.01" />
  </svg>
)

//Menu
Icon.Menu = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="4" y1="8" x2="20" y2="8" />
    <line x1="4" y1="16" x2="20" y2="16" />
  </svg>
)

//X
Icon.X = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#333333"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

// Comment
Icon.Comment = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M3 20l1.3-3.9A9 8 0 1 1 7.7 19L3 20m9-8v.01M8 12v.01m8-.01v.01" />
  </svg>
)

// Unit
Icon.Unit = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <rect x="8" y="8" width="12" height="12" rx="2" />
    <line x1="4" y1="4" x2="4" y2="4.01" />
    <line x1="8" y1="4" x2="8" y2="4.01" />
    <line x1="12" y1="4" x2="12" y2="4.01" />
    <line x1="16" y1="4" x2="16" y2="4.01" />
    <line x1="4" y1="8" x2="4" y2="8.01" />
    <line x1="4" y1="12" x2="4" y2="12.01" />
    <line x1="4" y1="16" x2="4" y2="16.01" />
  </svg>
)

// Chilli
Icon.Chilli = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M13 11c0 2.21-2.239 4-5 4s-5-1.79-5-4a8 8 0 1 0 16 0 3 3 0 0 0-6 0m3-3c0-2 2-4 4-4" />
  </svg>
)

// Pizza
Icon.Pizza = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.5c-3.04 0 -5.952 -.714 -8.5 -1.983l8.5 -16.517l8.5 16.517a19.09 19.09 0 0 1 -8.5 1.983z" />
    <path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634a14.944 14.944 0 0 0 6.502 -1.479" />
    <path d="M13 11.01v-.01" />
    <path d="M11 14v-.01" />
  </svg>
)

// Pyramid
Icon.Pyramid = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M3 17l9 4 9-4-9-14zm9-14v18" />
  </svg>
)

// Rainbow
Icon.Rainbow = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M22 17c0-5.523-4.477-10-10-10S2 11.477 2 17m16 0a6 6 0 1 0-12 0m8 0a2 2 0 1 0-4 0" />
  </svg>
)

// RowInsertBottom
Icon.RowInsertBottom = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1z" />
    <line x1="12" y1="15" x2="12" y2="19" />
    <line x1="14" y1="17" x2="10" y2="17" />
  </svg>
)

// Export
Icon.Export = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M11.5 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v5m-5 6h7m-3-3l3 3-3 3" />
  </svg>
)

// SquiggleyArrowLeft
Icon.SquiggleyArrowLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M7 9.996H3v4" />
    <path d="M21 11.996c-.887-1.285-2.48-2.033-4-2-1.52-.033-3.113.715-4 2-.887 1.284-2.48 2.033-4 2-1.52.033-3-1-4-2l-2-2" />
  </svg>
)

// Icon Park

// Dumbbell
Icon.Dumbbell = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="1.5"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M2 12h1" />
    <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
    <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
    <path d="M9 12h6" />
    <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
    <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" />
    <path d="M22 12h-1" />
  </svg>
)

// layout grid
Icon.LayoutGrid = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="1.5"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
    <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
    <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
    <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
  </svg>
)

Icon.Minus = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l14 0" />
  </svg>
)

// Man

Icon.Man = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-man">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 16v5" />
    <path d="M14 16v5" />
    <path d="M9 9h6l-1 7h-4z" />
    <path d="M5 11c1.333 -1.333 2.667 -2 4 -2" />
    <path d="M19 11c-1.333 -1.333 -2.667 -2 -4 -2" />
    <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </svg>
)

// Bold
Icon.Bold = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z" />
    <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" />
  </svg>
)

// Italic
Icon.Italic = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="11" y1="5" x2="17" y2="5" />
    <line x1="7" y1="19" x2="13" y2="19" />
    <line x1="14" y1="5" x2="10" y2="19" />
  </svg>
)

// Underline
Icon.Underline = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 5v5a5 5 0 0 0 10 0v-5" />
    <line x1="5" y1="19" x2="19" y2="19" />
  </svg>
)

// List
Icon.List = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="9" y1="6" x2="20" y2="6" />
    <line x1="9" y1="12" x2="20" y2="12" />
    <line x1="9" y1="18" x2="20" y2="18" />
    <circle cx="5" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="5" cy="18" r="1" fill="currentColor" stroke="none" />
  </svg>
)

// Notebook
Icon.Notebook = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
    <line x1="13" y1="8" x2="15" y2="8" />
    <line x1="13" y1="12" x2="15" y2="12" />
  </svg>
)

// Clipboard Data

Icon.ClipboardData = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-data">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
    <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
    <path d="M9 17v-4" />
    <path d="M12 17v-1" />
    <path d="M15 17v-2" />
    <path d="M12 17v-1" />
  </svg>
)
