import Page01 from '../pages/Page01'
import Page02 from '../pages/Page02'
import Page03 from '../pages/Page03'
import Page04 from '../pages/Page04'

export const chapters = [
  {
    label: 'Chapter 1 - Foundations',
    pages: [
      { id: 1, title: 'Introduction to Languages and Grammar', Component: Page01 },
      { id: 2, title: 'Automata: Core Ideas', Component: Page02 },
      { id: 3, title: 'Automata Design Workflow', Component: Page03 },
      { id: 4, title: 'Self Assessment Test', Component: Page04 },
    ],
  },
]

export const allPages = chapters.flatMap((chapter) => chapter.pages)
