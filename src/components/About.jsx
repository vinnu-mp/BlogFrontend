import React from "react";

const AboutProject = () => {
  return (
    <section className="w-full py-12 bg-gray-300 rounded-md m-2">
      <div className="max-w-6xl mx-auto px-6">
        {/* ---------- Title ---------- */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          About This Project
        </h2>

        {/* ---------- Description ---------- */}
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          This is a full-stack blog application built as a learning project to
          understand how real-world web applications are designed and
          implemented. The focus of this project is on building a custom
          backend, secure authentication, and clean frontend-backend integration
          without relying on backend-as-a-service platforms.
        </p>

        {/* ---------- Features ---------- */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Key Features
          </h3>

          <ul className="grid grid-cols-2 gap-4 text-gray-700">
            <li>• JWT-based authentication (login & signup)</li>
            <li>• Protected routes and access control</li>
            <li>• Create, edit, and delete blog posts</li>
            <li>• Ownership-based authorization</li>
            <li>• Rich text editor for writing posts</li>
            <li>• Image upload using Cloudinary</li>
            <li>• Draft and published post workflow</li>
            <li>• RESTful API design</li>
          </ul>
        </div>

        {/* ---------- Tech Stack ---------- */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Tech Stack
          </h3>

          <div className="grid grid-cols-3 gap-6 text-gray-700">
            {/* Frontend */}
            <div>
              <h4 className="font-bold mb-2">Frontend</h4>
              <ul className="space-y-1">
                <li>• React (Vite)</li>
                <li>• Redux Toolkit</li>
                <li>• React Router</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>

            {/* Backend */}
            <div>
              <h4 className="font-bold mb-2">Backend</h4>
              <ul className="space-y-1">
                <li>• Node.js</li>
                <li>• Express.js</li>
                <li>• MongoDB (Atlas)</li>
                <li>• JWT Authentication</li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-2">Services</h4>
              <ul className="space-y-1">
                <li>• Cloudinary (Image Storage)</li>
                <li>• REST APIs</li>
                <li>• Environment-based Config</li>
                <li>• RTE (Rich Text Editor)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ---------- Footer Note ---------- */}
        <div className="mt-12 text-gray-600 text-sm">
          <p>
            This project was built with a production mindset, focusing on
            scalability, security, and real-world development practices. The
            backend is designed to be deployable using cloud services and
            production databases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
