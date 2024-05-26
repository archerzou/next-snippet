import { readAllSnippet } from "@/app/api/snippet/service";
import { SnippetSearch } from "@/app/components/SnippetSearch/SnippetSearch";

export default async function MainPage() {
  const { data: snippets } = await readAllSnippet();
  console.log("debug", snippets);

  return (
    <SnippetSearch snippets={snippets} placeholder={"searchPlaceholder"} />
  );
}
