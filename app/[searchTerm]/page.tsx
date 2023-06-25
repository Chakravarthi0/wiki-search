import Link from "next/link";
import getWikiResults from "../lib/getWikiResults";

type Props = {
  params: {
    searchTerm: string;
  };
};

//dynamically generate metadata
export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults({ searchTerm });
  const data = await wikiData;

  //replace %20 with spaces
  const title = searchTerm.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `${title} Not Found`,
    };
  }

  return {
    title,
    description: `Search results for ${title}`,
  };
}

export default async function page({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults({ searchTerm });
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="bg-slate-300 mx-auto max-w-lg py-1 my-5 rounded-md">
      {results ? (
        Object.values(results).map((result) => {
          return (
            <article key={result.pageid} className="m-4 max-w-lg">
              <div className="flex flex-col justify-center">
                <h2>
                  <Link
                    href={`https://en.wikipedia.org/?curid=${result.pageid}`}
                    target="_blank"
                    className="text-xl font-bold underline"
                  >
                    {result.title}
                  </Link>
                </h2>
                <p>{result.extract}</p>
              </div>
            </article>
          );
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );

  return content;
}
