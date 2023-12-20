import React from "react";

const Chats = () => {
  const chats = [
    {
      name: "Hugo",

      message: "Hello",
    },
    { name: "Me", message: "Hello Hugo" },
    { name: "Hugo", message: "Hello Igna" },
    { name: "Me", message: "Hello Hugo" },
    { name: "Me", message: "Hello Hugo" },
  ];
  return (
    <section className="[grid-area:main] flex  flex-col">
      {/* <div className="flex flex-col items-center justify-center h-full">
        <h1 className="font-bold text-2xl ">Chats</h1>
        <p className="text-gray-500">
          Selecciona un chat para empezar a chatear
        </p>
      </div> */}

      <article
        className="w-full h-full  flex bg-slate-200  "
        style={{
          height: "calc(100vh - 80px)",
        }}>
        <div className="max-h-16 fixed  top-0 h-full w-full bg-slate-400 flex items-center justify-start pl-4  gap-2">
          <img
            src="https://randomuser.me/api/portraits/women/79.jpg"
            className="w-12 h-12 rounded-full"
          />
          <p className="text-xl font-semibold tracking-tight ">Hugo</p>
        </div>

        <div className="mt-20 w-full h-full">
          <ul className="">
            {chats.map((item, idx) => (
              <li
                key={idx}
                className={`flex max-w-[100px] flex-col items-start rounded-lg  p-2 gap-1 my-2 ${
                  item.name === "Me"
                    ? "bg-sky-700 ml-auto mr-1"
                    : "bg-slate-50 ml-1"
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
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="
        fixed
        flex 
        items-center
        h-full
        max-h-20
     bottom-0
       max-w-[695px]
       w-full
        p-3
        bg-slate-400
      
        gap-2
      ">
        <input
          className="rounded-2xl w-[90%]  p-2 bg-slate-200"
          type="text"
          placeholder="Mensaje"
        />
        <button className="bg-blue-500  rounded-full text-slate-50 p-2 font-semibold tracking-tight">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Chats;
