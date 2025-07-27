import { PageWrapper } from "@/components/page-wrapper";
import { getNoteById } from "@/server/notes";
import RichTextEditor from "@/components/RichTextEditor";
import { JSONContent } from "@tiptap/react";

type Params = Promise<{
  noteId: string;
}>;


const NotePage = async ({ params }: { params: Params }) => {
  const { noteId } = await params;

  const result = await getNoteById(noteId);

  const { note } = result;
  console.log(note?.content);

  return (
    <PageWrapper
      breadcrumbs={
        [
          { label: "Dashboard", href: "/dashboard" },
          {
            label: note?.notebook.name || "Notebook",
            href: `/dashboard/notebook/${note?.notebook.id}`,
          },
          {
            label: note?.title || "Note",
            href: `/dashboard/notebook/${note?.notebook.id}/note/${note?.id}`,
          },
        ]
      }
    >
      <RichTextEditor content={note?.content as JSONContent} noteId={noteId} />
    </PageWrapper>
  );
};

export default NotePage;
