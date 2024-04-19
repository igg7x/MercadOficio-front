import React from "react";
const Info = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-5 md:py-7">
      <div className="px-4 md:px-0">
        <div className="mb-8">
          <h2 className="text-3xl font-inter">Personal Information</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Update your profile details.
          </p>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-lg font-medium text-gray-700 dark:text-gray-300"
                htmlFor="name">
                Name
              </label>
              <div className="mt-1">
                <input
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="John Doe"
                  id="name"
                  name="name"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="email">
                Email
              </label>
              <div className="mt-1">
                <input
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="john.doe@example.com"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="bio">
              Bio
            </label>
            <div className="mt-1">
              <textarea
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue="I am a passionate web developer with a love for creating beautiful and functional user interfaces."
                id="bio"
                name="bio"
                rows={3}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            type="submit">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Info;
