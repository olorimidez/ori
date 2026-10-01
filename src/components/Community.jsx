"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useVisitorId } from "@/lib/visitorId";


export default function Community() {
  const supabase = createClient();
  const visitorId = useVisitorId();

  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [likedComments, setLikedComments] = useState([]);
  const [likeCounts, setLikeCounts] = useState({});

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name.trim() || !message.trim()) return;

  const { data, error } = await supabase
    .from("comments")
    .insert([
      {
        name: name.trim(),
        message: message.trim(),
        likes: 0,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error posting comment:", error);
    return;
  }

  setComments((currentComments) => [
    data,
    ...currentComments,
  ]);

  setName("");
  setMessage("");
};

useEffect(() => {
  if (!visitorId) return;

  const fetchCommentsAndLikes = async () => {

    const { data: commentsData, error: commentsError } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });

    if (commentsError) {
      console.error("Error fetching comments:", commentsError);
      return;
    }

    const { data: likesData, error: likesError } = await supabase
      .from("comment_likes")
      .select("comment_id, visitor_id");

    if (likesError) {
      console.error("Error fetching likes:", likesError);
      return;
    }

    const visitorLikes = likesData
      .filter((like) => like.visitor_id === visitorId)
      .map((like) => like.comment_id);

    const counts = {};

    likesData.forEach((like) => {
      counts[like.comment_id] =
        (counts[like.comment_id] || 0) + 1;
    });

    setComments(commentsData);
    setLikedComments(visitorLikes);
    setLikeCounts(counts);
  };

  fetchCommentsAndLikes();
}, [visitorId]);

const handleLike = async (commentId) => {
  if (!visitorId) return;

  if (likedComments.includes(commentId)) {
    return;
  }

  const { error } = await supabase
    .from("comment_likes")
    .insert({
      comment_id: commentId,
      visitor_id: visitorId,
    });

  if (error) {
    console.error("Error adding like:", error);
    return;
  }

  setLikedComments((current) => [
    ...current,
    commentId,
  ]);

  setLikeCounts((current) => ({
    ...current,
    [commentId]: (current[commentId] || 0) + 1,
  }));
};


  return (
    <section
      id="community"
      className="bg-[#E6E4E0] mt-10 px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">

        {/* INTRO */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
            Community
          </p>

          <h2 className="text-4xl font-medium tracking-tight text-[#292722] md:text-5xl">
            Join the Conversation
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
            What did you think about what you discovered?
            Share your thoughts, ask a question, or contribute
            something you know with others.
          </p>

        </div>


        {/* COMMENT FORM */}
        <div className="mx-auto mt-14 max-w-2xl">

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur-sm md:p-8"
          >

            <div className="mb-5">

              <label className="mb-2 block text-sm font-medium text-[#292722]">
                Your name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-black/30"
              />

            </div>


            <div>

              <label className="mb-2 block text-sm font-medium text-[#292722]">
                Your thoughts
              </label>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your thoughts, ask a question..."
                rows={5}
                className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-gray-400 focus:border-black/30"
              />

            </div>


            <div className="mt-5 flex justify-end">

              <button
                type="submit"
                className="rounded-full bg-[#292722] px-7 py-3 text-sm text-white transition hover:bg-black"
              >
                Post Comment
              </button>

            </div>

          </form>

        </div>


        {/* COMMENTS */}
        <div className="mx-auto mt-20 max-w-2xl">

          <div className="mb-8 flex items-center justify-between">

            <div>
              <h3 className="text-2xl font-medium text-[#292722]">
                Community Voices
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {comments.length} people have joined the conversation
              </p>
            </div>

          </div>


          <div className="space-y-5">

            {comments.map((comment) => (

              <article
                key={comment.id}
                className="rounded-2xl border border-black/10 bg-white/70 p-6"
              >

                <div className="flex items-start gap-4">

                  {/* AVATAR */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#292722] text-sm font-medium text-white">
                    {comment.name.charAt(0).toUpperCase()}
                  </div>


                  {/* CONTENT */}
                  <div className="min-w-0 flex-1">

                    <div className="flex items-center gap-2">

                      <h4 className="font-medium text-[#292722]">
                        {comment.name}
                      </h4>

                     <span className="text-xs text-gray-400">
                      · {new Date(comment.created_at).toLocaleString()}
                    </span>

                    </div>


                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {comment.message}
                    </p>


                    {/* ACTIONS */}
                    <div className="mt-4 flex items-center gap-5">

                     <button
                      onClick={() => handleLike(comment.id)}
                      disabled={likedComments.includes(comment.id)}
                      className={`text-xs transition ${
                        likedComments.includes(comment.id)
                          ? "text-[#292722]"
                          : "text-gray-500 hover:text-[#292722]"
                      }`}
                    >
                      {likedComments.includes(comment.id) ? "♥" : "♡"}{" "}
                      {likeCounts[comment.id] || 0}
                    </button>

                      <button className="text-xs text-gray-500 transition hover:text-[#292722]">
                        Reply
                      </button>

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>


        {/* QUESTION OF THE WEEK */}
        {/* <div className="mx-auto mt-20 max-w-2xl">

          <div className="rounded-3xl bg-[#292722] px-7 py-12 text-center text-white md:px-12">

            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Question of the Week
            </p>

            <h3 className="mx-auto mt-5 max-w-lg text-2xl font-medium leading-relaxed md:text-3xl">
              What part of Yoruba traditional knowledge
              would you like us to explore next?
            </h3>

            <button
              className="mt-8 rounded-full border border-white/30 px-7 py-3 text-sm transition hover:bg-white hover:text-[#292722]"
            >
              Share Your Answer
            </button>

          </div>

        </div> */}

      </div>
    </section>
  );
}