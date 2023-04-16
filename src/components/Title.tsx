type TitleProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: string;
};

export const Title = ({ children, level=2, variant }: TitleProps) => {
  const TagName = `h${level}` as keyof JSX.IntrinsicElements;
  const defaultClasses = `font-bold`;

  let variantClasses = "text-3xl";
  switch (variant) {
    case "default":
      break;
    case "subtitle":
      variantClasses = "text-lg";
      break;
    case "underline":
      variantClasses =
        "text-xl my-4 underline underline-offset-8 decoration-4 decoration-slate-300 dark:decoration-zinc-700";
    default:
      break;
  }

  return (
    <TagName className={`${defaultClasses} ${variantClasses}`}>
      {children}
    </TagName>
  );
};
