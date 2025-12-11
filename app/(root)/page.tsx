import React from "react";
import SearchForm from "@/components/SearchForm";
import StartupCards from "@/components/StartupCards";

async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
 const query = (await searchParams).query

  const post = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Adrian' },
      _id: 342,
      description: "Here is a description",
      image:
        "https://plus.unsplash.com/premium_photo-1677094310918-cc302203b21c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      {/* Hero section */}
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>

      {/* Cards */}

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "Recommended startups"}
        </p>

        <ul className="mt-7 card_grid">
          {post.length > 0 ? (
            post.map((ps,index: number)=> (
            <StartupCards key={ps._id} post ={ps}/>
            ))
          ) : (
            <p className="no-results">No startup found</p>
          )}
        </ul>
      </section>
    </>
  );
}

export default Home;
