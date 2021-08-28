import ChapterModel from '../../models/Chapter.model';

interface StartingChapterStarProps {
  chapter: ChapterModel;
  chapters: ChapterModel[];
  changeStartingChapter: (a: any, b: any) => any;
}

const StartingChapterStar = (props: StartingChapterStarProps) => {
  const fill = props.chapter.startingChapter ? 'currentColor' : 'none';
  const startingChapterId = props.chapters.find((c) => c.startingChapter)?.id;

  const onClick = (e: any) => {
    e.preventDefault();
    if (!props.chapter.startingChapter) {
      props.changeStartingChapter(props.chapter.id, startingChapterId);
    }
  };

  return (
    <i
      className={!props.chapter.startingChapter ? 'cursor-pointer' : ''}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          // eslint-disable-next-line max-len
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    </i>
  );
};

export default StartingChapterStar;
