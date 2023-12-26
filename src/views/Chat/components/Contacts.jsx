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
    <section className="[grid-area:aside] px-1 pt-2 flex flex-col">
      <h1 className="font-bold text-2xl ">Chats</h1>
      <ul className="min-h-fit py-2 mt-2 divide-y rounded-xl  space-y-1 overflow-y-scroll  scroll-smooth">
        {contacts.map((item, id) => (
          <li
            id={id}
            className="flex items-center gap-x-2 py-2 rounded-md  hover:bg-gray-200 active:bg-gray-100 duration-150">
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
