import React from "react";

const Listener = () => {
  return (
    <div className="flex flex-col items-center bg-pink-300 text-black p-4 rounded-lg shadow-md space-y-4 max-w-2xl mx-auto">
      <iframe
        className="w-full aspect-video rounded-lg"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2006167567&color=%23d474b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div
        className="text-xs text-black overflow-hidden whitespace-nowrap text-ellipsis w-full"
      >
        <a
          href="https://soundcloud.com/lllabmug"
          title="gumballl :)"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-pink-400"
        >
          gumballl ;)
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/lllabmug/gumballl-hard-groove-mix-04"
          title="gumballl hard groove mix ! 04"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-pink-400"
        >
          gumballl hard groove mix ! 04
        </a>
      </div>
    </div>
  );
};

export default Listener;
