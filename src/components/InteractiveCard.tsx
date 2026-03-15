"use client";

export default function InterectiveCard({
  children,
  contentName,
}: {
  children: React.ReactNode;
  contentName: string;
}) {
  // function OnCardSelected() {
  //   alert("You Select " + contentName);
  // }

  function OnCardMouseAction(event: React.SyntheticEvent) {
    if (event.type === "mouseover") {
      event.currentTarget.classList.remove("shadow-lg", "bg-white");
      event.currentTarget.classList.add("shadow-2xl", "bg-neutral-200");
    } else if (event.type === "mouseout") {
      event.currentTarget.classList.remove("shadow-2xl", "bg-neutral-200");
      event.currentTarget.classList.add("shadow-lg", "bg-white");
    }
  }

  return (
    <div
      className="w-[200px] h-[300px] rounded-lg shadow-lg bg-white"
      // onClick={OnCardSelected}
      onMouseOver={(e) => OnCardMouseAction(e)}
      onMouseOut={(e) => OnCardMouseAction(e)}
    >
      {children}
    </div>
  );
}