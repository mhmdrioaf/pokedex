"use client";

interface ICardInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  value: string | number;
}

export default function CardInfo({ title, value, ...props }: ICardInfoProps) {
  return (
    <div
      className="w-full flex flex-col gap-1 items-center justify-center bg-primary-foreground text-primary text-xs rounded-md p-4"
      {...props}
    >
      {title && (
        <>
          <h4 className="font-bold">{title}</h4>
          <hr className="w-full h-px rounded-sm border-primary" />
        </>
      )}
      <p>{value}</p>
    </div>
  );
}
