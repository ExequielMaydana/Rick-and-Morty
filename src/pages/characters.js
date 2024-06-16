import React from "react";
import TodoCharacters from "@/components/Characters/Characters";
import Filters from "@/components/Filters/Filters";

const Characters = ({ data, page, name }) => {
  return (
    <section className="w-full flex flex-col gap-6">
      <Filters />
      <TodoCharacters data={data} page={page} name={name} />
    </section>
  );
};

export default Characters;

export async function getServerSideProps(context) {
  const page = context.query.page || 1;
  const name = context.query.name || "";

  console.log("context", context.query);
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/character?page=${page}&name=${name}`
    );
    const data = await res.json();
    return { props: { data, page: Number(page), name } };
  } catch (error) {
    console.error("Error getting all the characters en indexjs:", error);
    return {
      props: {
        data: null,
        page: 1,
        name: "",
      },
    };
  }
}
