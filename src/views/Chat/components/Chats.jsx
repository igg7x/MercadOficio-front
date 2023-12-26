import React from "react";

const Chats = () => {
  const chats = [
    {
      name: "Hugo",
      message: "Hello",
    },
    { name: "Me", message: "Hello Hugo", date: "2021-10-10" },
    { name: "Hugo", message: "Hello Igna", date: new Date().toISOString() },
    { name: "Me", message: "Hello Hugo" },
    { name: "Me", message: "Hello Hugo" },
    { name: "Hugo", message: "Hello Ronnie (JOAQUIN)" },
    { name: "Hugo", message: "Hello Ronnie (JOAQUIN)" },
    { name: "Hugo", message: "Hello Ronnie (JOAQUIN)" },
    { name: "Hugo", message: "Hello Ronnie (JOAQUIN)" },
  ];

  // const chats = [];
  return (
    <section className="[grid-area:main] relative flex  max-w-[700px] w-full flex-col">
      {chats.length === 0 ? (
        <div className="flex flex-col items-center  justify-center h-full">
          <h1 className="font-bold text-2xl ">Chats</h1>
          <p className="text-gray-500">
            Selecciona un chat para empezar a chatear
          </p>
        </div>
      ) : (
        <article className="w-full h-full  flex bg-slate-50">
          <div className="max-h-16 absolute top-0  right-0  left-0 h-full w-full rounded-b-2xl  bg-slate-100 flex items-center justify-start pl-4  gap-2">
            <img
              src="https://randomuser.me/api/portraits/women/79.jpg"
              className="w-12 h-12 rounded-full"
            />
            <p className="text-xl font-semibold tracking-tight ">Hugo</p>
          </div>

          <div className=" w-full  overflow-y-scroll list-none scroll-smooth">
            <ul className="py-16">
              {chats.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex max-w-[100px] flex-col items-start rounded-lg  p-2 gap-1 my-2 ${
                    item.name === "Me"
                      ? "bg-sky-500 ml-auto mr-1"
                      : "bg-slate-300 ml-1"
                  }`}>
                  <p className="text-sm font-semibold tracking-tight">
                    {item.name}
                  </p>
                  <p className="text-sm tracking-tight">{item.message}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      )}
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="
        absolute
            flex 
            justify-between
            items-center
            h-full
            max-h-16
         bottom-0
         left-0
         right-0
            p-3
            bg-slate-100
            rounded-t-2xl
            gap-2
          ">
        <input
          className="rounded-2xl w-[85%] p-2 bg-slate-200 outline-none"
          type="text"
          placeholder="Mensaje..."
        />
        <button className="bg-blue-500  rounded-full text-slate-50 p-2 font-semibold tracking-tight">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Chats;
