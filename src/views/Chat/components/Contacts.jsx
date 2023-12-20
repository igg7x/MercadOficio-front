import React from "react";

const Contacts = () => {
  const contacts = [
    {
      name: "Hugo",
      message: "Hello",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Hugo",
      message: "Hello",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Hugo",
      message: "Hello",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Hugo",
      message: "Hello",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Hugo",
      message: "Hello",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Hugo",
      message: "Hello",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Hugo",
      message: "Hello",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Hugo",
      message: "Hello",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Hugo",
      message: "Hello",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Hugo",
      message: "Hello",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Hugo",
      message: "Hello",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Hugo",
      message: "Hello",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Hugo",
      message: "Hello",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
  ];

  return (
    <section className="[grid-area:aside] pl-3 pt-2 flex flex-col">
      <h1 className="font-bold text-2xl ">Chats</h1>
      <ul className="min-h-fit p-2 mt-2 bg-slate-100 rounded-xl  overflow-y-scroll">
        {contacts.map((item, id) => (
          <li
            id={id}
            className="flex items-center gap-x-2 p-2 rounded-lg  hover:bg-gray-200 active:bg-gray-100 duration-150">
            <img src={item.image} className="w-10 h-10 rounded-full" />
            <div className="flex flex-col">
              <h4 className="font-bold tracking-tight text-base ">
                {item.name}
              </h4>
              <p className="text-gray-500">{item.message}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contacts;
