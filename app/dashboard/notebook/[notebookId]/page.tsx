import CreateNoteButton from "@/components/create-note-button";
import NoteCard from "@/components/note-card";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebookById } from "@/server/notebooks";

type Params = Promise<{
  notebookId: string;
}>;

const NotePage = async ({ params }: { params: Params }) => {
  const { notebookId } = await params;

  const { notebook } = await getNotebookById(notebookId);

  return (
    <PageWrapper
      breadcrumbs={
        [
          { label: "Dashboard", href: "/dashboard" },
          { label: notebook?.name || "Notebook", href: `/dashboard/notebook/${notebookId}` },
        ] 
      }
    >
      <h1 className="font-bold text-center my-3 text-3xl">{notebook?.name}</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <CreateNoteButton notebookId={notebookId}/>

      {notebook?.notes.map((note) => (
        <NoteCard key={note.id} note={note}/>
      ))}
      </div>

      {notebook?.notes.length === 0 && (<div>
        No notes found
      </div>)}
    </PageWrapper>
  );
};

export default NotePage;
