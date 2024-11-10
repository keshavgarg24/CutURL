import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 md:p-12 bg-black text-gray-200 rounded-lg shadow-xl my-10">
      <h1 className="text-5xl font-extrabold text-center text-red-600 mb-6">
        Privacy Policy
      </h1>
      <p className="text-center text-sm text-gray-500 mb-10">
        Last updated: November 4, 2024
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-400 mb-3">
          1. Introduction
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Welcome to CutURL! We respect your privacy and are committed to
          protecting your personal information. This Privacy Policy explains
          how we collect, use, and share your data when you use our service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-400 mb-3">
          2. Information We Collect
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We may collect information such as your email address, IP address, and
          data related to the URLs you shorten or create on our platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-400 mb-3">
          3. How We Use Your Information
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Your information helps us improve our services, provide support, and
          communicate updates. We use your data solely for enhancing the CutURL
          experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-400 mb-3">
          4. Sharing Your Information
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We do not sell your data. We may share information only with
          third-party providers assisting us or with legal authorities if
          required.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-400 mb-3">
          5. Security
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We use secure technologies to protect your information. However, no
          system is entirely safe, so we encourage you to handle your data
          responsibly.
        </p>
      </section>

      <p className="text-center text-xs mt-10 text-gray-500">
        For questions, feel free to{" "}
        <a
          href="mailto:support@cuturl.tech"
          className="underline text-red-500 hover:text-red-700"
        >
          contact us
        </a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
