type SectionTitleProps = {
  title: string;
  description?: string;
};

function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;