import SearchBarLayout from "@/components/SearchBarLayout";
import {ReactNode} from "react";
import BookItem from "@/components/BookItem";
import {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";
import fetchBooks from "@/lib/fetchBooks";

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const q = context.query.q;
  const books = await fetchBooks(q as string);

  return {
    props: {books},
  };
};

const Page = ({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

export default Page;

Page.getLayout = (page: ReactNode) => {
  return <SearchBarLayout>{page}</SearchBarLayout>;
};
